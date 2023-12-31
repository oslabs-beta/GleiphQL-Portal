import * as dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';
import configurePassport from './passport';
import cookieParser from 'cookie-parser';
import db, { pool } from './models/dbModel';
import { ErrorObject, EndpointRequest } from '../types';
import { WebSocket, WebSocketServer } from 'ws'; 
import helmet from 'helmet';
import path from 'path'
import http from 'http';


import express, {
  Express,
  NextFunction,
  Request,
  Response,
  ErrorRequestHandler,
} from 'express';

// routers
import accountRouter from  './routers/accountRouter';
import dataRouter from './routers/dataRouter';
import endpointRouter from './routers/endpointRouter';
import sessionRouter from './routers/sessionRouter';


const PORT = process.env.PORT || 3500;

const app: Express = express();

const httpServer = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: [
    '/',
    'http://localhost:8080',
    'http://localhost:3000',
    'http://localhost:3500',
    'http://gleiphql.azurewebsites.net',
    'https://gleiphql.azurewebsites.net',
    'http://gleiphql.azurewebsites.net:8080',
    'https://gleiphql.azurewebsites.net:8080',
  ],
  methods: [
    'GET',
    'POST',
    'DELETE'
  ],
}));

app.use(express.static(path.resolve(__dirname, '../../dist/client')))

app.use(session({
  store: new (require('connect-pg-simple')(session))({
    pool: pool,
    tableName: 'sessions'
  }),
  secret: process.env.SESSION_SECRET || 'secret',
  cookie: { 
    secure: true,
    httpOnly: true
  },
  name: 'sessionId',
  resave: false,
  saveUninitialized: true,
}))

app.use(cookieParser(process.env.SESSION_SECRET));

configurePassport(passport);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((userObj, done) => {
  done(null, userObj);
});
passport.deserializeUser((userObj, done) => {
  //@ts-ignore
  done(null, userObj);
})

app.use('/api/account', accountRouter);
app.use('/api/data', dataRouter);
app.use('/api/endpoint', endpointRouter);
app.use('/api/session', sessionRouter);


app.get("*", async (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/client/index.html'))
})

app.use((req: Request, res: Response) : void => {
  res.status(404).send('This is not the page you\'re looking for...')
});

httpServer.listen(PORT, () : void =>
  console.log(`Currently listening on port: ${PORT}`)
);

// websocket server
const wssDataController : WebSocketServer = new WebSocketServer({ server: httpServer }); 

console.log(`in wssData controller, should be listening on 8080, ${wssDataController}`);

wssDataController.on('connection', async function connection(ws: WebSocket, req: Request) {
  const endpointId: number = Number(req.url?.substring(1));

  // query to the database for graphql query data on the endpoint that established connection with ws server
  const query = async () : Promise<void> => {
    const sqlCommand: string = `
      SELECT * FROM requests WHERE endpoint_id = $1 ORDER BY to_timestamp(timestamp, 'Dy Mon DD YYYY HH24:MI:SS') DESC;
    `;
    const values: number[] = [ endpointId ];
    try {
      const result: EndpointRequest[] = (await db.query(sqlCommand, values)).rows;
      ws.send(JSON.stringify(result));
    } catch (err: unknown) {
      console.log('The database call within the websocket function has borked itself somehow')
    }
  }

  query(); // initial query upon establishing connection 
  const interval = setInterval(query, 5000); // for continous update from database

  ws.on('close', () : void => {
    clearInterval(interval);
  })

  ws.on('error', (err: unknown) : void => {
    if(err instanceof Error) console.log('Websocket error in dataController:', err.message);
  })
})
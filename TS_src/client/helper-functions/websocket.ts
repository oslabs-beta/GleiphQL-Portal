import { Endpoint, SetEndpointRequests, EndpointRequest } from '../../types';

// instantiating a connection with the Websocket Server to obtain updates on the current endpoint data
const streamWS = (currEndPoint: Endpoint, setEndpointRequests: SetEndpointRequests) : (() => void) => {
  const currentURL = window.location.href
  const parsedURL = new URL(currentURL);
  const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws'
  const fetchWS = new WebSocket(`${protocol}://${parsedURL.hostname}/${currEndPoint.endpoint_id}`)
  console.log('websocket URL:', fetchWS)
  // const fetchWS = new WebSocket(`ws://gleiphql.us-east-1.elasticbeanstalk.com:8080/${currEndPoint.endpoint_id}`)
  // const fetchWS = new WebSocket(`ws://gleiphql.azurewebsites.net:8080/${currEndPoint.endpoint_id}`)
  // const fetchWS = new WebSocket(`ws://localhost:8080/${currEndPoint.endpoint_id}`)
    fetchWS.onmessage = function(event) : void {
      console.log('onmessage function')
      const data: EndpointRequest[] = JSON.parse(event.data);
      setEndpointRequests(data);
    }

    fetchWS.onerror = function(err: unknown) : void {
      console.error('websocket connection failed:', err);
    };

    return () : void => {
      console.log('closing current connection', currEndPoint.endpoint_id);
      // to use later for closing connections
      fetchWS.close()
    }
}

export default streamWS;
import { FC, ReactElement, useState , useEffect } from 'react';
import useStore from '../store';
import Navbar from '../components/Navbar';
import RequestTable from '../components/RequestTable';
import LineChart from '../components/LineChart';
import ChartHeader from '../components/ChartHeader';
import { Navigate } from 'react-router-dom';
import checkSession from '../helper-functions/checkSession';
import Sidebar from '../components/Sidebar';
import { DonutIPChart } from '../components/DonutIPChart';
import { DonutObjectChart } from '../components/DonutObjectChart';
import streamWS from '../helper-functions/websocket';
import { PartialStore } from '../../types';


const Dashboard: FC = () : ReactElement => {
  const { 
    currEndpoint, 
    isLoggedIn, 
    setIsLoggedIn, 
    setCurrUser, 
    loginToggle, 
    setModalOpen, 
    connection, 
    setConnection, 
    setEndpointRequests 
  } : PartialStore = useStore();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  // checking if there is an active session
  useEffect(() : void => {
    checkSession(setIsLoggedIn, setCurrUser, setIsLoading);
    loginToggle(false);
    setModalOpen(false);
  }, []);

  // establish connection with WebSocket Server for current endpoint
  useEffect(() : void => {
    // end previous connection if any
    if(connection !== null) connection();
    if(currEndpoint.endpoint_id) setConnection(streamWS(currEndpoint, setEndpointRequests));
  }, [currEndpoint]);

  if(isLoading) return <div>Loading...</div>;
  return (
    <div className='flex flex-col'>
      {!isLoggedIn && <Navigate to='/' replace={true} />}
      <Navbar />
      <div>
        <Sidebar />
      </div>
      <main className='flex flex-col place-items-center w-screen sm:pl-2 mt-10' id='content'>
      { currEndpoint.endpoint_id? 
        <>
          <ChartHeader />
          <div className='flex justify-evenly w-full'>
            <div className='w-3/5 rounded-lg border border-slate-100 border-1'>
              <LineChart />
            </div>
            <div className='w-1/4 mr-10 rounded-lg border border-slate-100 border-1'>
              <div className='h-2/5 my-10'>
                <DonutIPChart />
              </div>
              <div className='h-2/5'>
                <DonutObjectChart />
              </div>
            </div>
          </div>
          <RequestTable />
        </> : 
        <div className='mt-8 flex flex-col place-items-center w-screen sm:pl-12'>
          Add an endpoint
        </div>
      }
      </main> 
    </div>
  );
}

export default Dashboard;
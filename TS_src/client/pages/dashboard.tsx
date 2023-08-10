import { useState , useEffect } from 'react';
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


const Dashboard = () => {
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
    <div className='h-full'>
      {!isLoggedIn && <Navigate to='/' replace={true} />}
      <Navbar />
      <main className='flex flex-row h-full'>
        <div className='h-full'>
          <Sidebar />
        </div>
        <div className='place-items-center w-screen sm:pl-2 mt-10' id='content'>
          {currEndpoint.endpoint_id? 
          <>
            <ChartHeader />
            <article className='flex flex-col sm:flex-row sm:justify-evenly w-full pl-12'>
              <div className='w-3/5 rounded-lg border border-slate-100 border-1'>
                <LineChart />
              </div>
              <div className='w-3/5 sm:w-1/4 mr-10 rounded-lg border border-slate-100 border-1'>
                <div className='h-2/5 my-10'>
                  <DonutIPChart />
                </div>
                <div className='h-2/5'>
                  <DonutObjectChart />
                </div>
              </div>
            </article>
            <RequestTable />
          </> : 
          <p className='mt-8 flex justify-center place-items-center'>
            Add an Endpoint
          </p>
        }
        </div> 
      </main>
    </div>
  );
}

export default Dashboard;

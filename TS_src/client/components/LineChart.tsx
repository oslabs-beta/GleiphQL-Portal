import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import configChartData from '../helper-functions/dashboard-helpers';
import useStore from '../store';
import 'chart.js/auto';
import { SetStrValueFx, PartialStore } from '../../types';

const LineChart = () => {
  const { endpointRequests } : PartialStore = useStore();
  const [chartTimeInterval, setChartTime] = useState<string>('Last 30 Requests');
  const [chartDataType, setChartDataType] = useState<string>('Complexity');

  // change type of data displayed in the line chart
  const dataTypeChange: SetStrValueFx = (dataType: string) : void => {
    setChartDataType(dataType);
    if (dataType === 'Complexity' || dataType === 'Depth') {
      setChartTime('Last 30 Requests');
    }
    else {
      setChartTime('Last 7 Days');
    }
  }

  // chart configuration object
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: `${chartDataType} - ${chartTimeInterval}`,
      },
    },
  };

  const timeIntervals: string[] = ['Last 24 Hours', 'Last 7 Days', 'Last 30 Days'];
  const numRequests: string[] = ['Last 10 Requests', 'Last 30 Requests', 'Last 100 Requests'];
  
  const chartData = configChartData(chartTimeInterval, chartDataType, endpointRequests);

  return (
    <section className='flex flex-col place-items-center'>
      <p className='flex flex-row bg-blue-950 text-white rounded-md overflow-hidden'>
      { chartDataType === 'Requests' ? timeIntervals.map((timeInterval: string, index: number) => {
          if (chartTimeInterval === timeInterval) return (
            <button key={index} className='p-2 border border-blue-950 border-r-black bg-blue-900' onClick={() : void => setChartTime(timeInterval)}>{timeInterval}</button>
          );
          return (
            <button key={index} className='p-2 border border-blue-950 border-r-black hover:bg-blue-900' onClick={() : void => setChartTime(timeInterval)}>{timeInterval}</button>
          );
        }) : numRequests.map((numRequest: string, index: number) => {
          if(chartTimeInterval === numRequest) return (
            <button key={index} className='p-2 border border-blue-950 border-r-black bg-blue-900' onClick={() : void => setChartTime(numRequest)}>{numRequest}</button>
          );
          return (
            <button key={index} className='p-2 border border-blue-950 border-r-black hover:bg-blue-900' onClick={() : void => setChartTime(numRequest)}>{numRequest}</button>
          )
        })
      }
      </p>
      <p id='chartContainer'>
        <Line options={options} data={chartData} 
        />
      </p>
      <p className='flex flex-row bg-blue-950 text-white rounded-md overflow-hidden w-80 m-4'>
        {chartDataType === 'Requests'? (
          <button className='p-2 px-1 border border-blue-950 border-r-black bg-blue-900 w-1/3' onClick={(): void => dataTypeChange('Requests')}>Requests</button>
        ) : (
          <button className='p-2 px-1 border border-blue-950 border-r-black hover:bg-blue-900 w-1/3' onClick={(): void => dataTypeChange('Requests')}>Requests</button>
        )}
        {chartDataType === 'Complexity'? (
          <button className='p-2 px-1 border border-blue-950 border-r-black bg-blue-900 w-1/3' onClick={(): void => dataTypeChange('Complexity')}>Complexity</button>
        ) : (
          <button className='p-2 px-1 border border-blue-950 border-r-black hover:bg-blue-900 w-1/3' onClick={(): void => dataTypeChange('Complexity')}>Complexity</button>
        )}
        {chartDataType === 'Depth'? (
          <button className='p-2 px-1 border border-blue-950 bg-blue-900 w-1/3' onClick={() : void => dataTypeChange('Depth')}>Depth</button>
        ) : (
          <button className='p-2 px-1 border border-blue-950 hover:bg-blue-900 w-1/3' onClick={() : void => dataTypeChange('Depth')}>Depth</button>
        )}
      </p>
    </section>
  )
}

export default LineChart;
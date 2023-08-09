import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import useStore from '../store';
import { EndpointRequest, PartialStore } from '../../types';

ChartJS.register(ArcElement, Tooltip, Legend);

export function DonutIPChart() {
  const { endpointRequests } : PartialStore = useStore();
  const ipCount: any = {}
  const ipAddresses: string[] = []
  const ipOccurrence: number[] = []
  const sortable = []

  for (let i = 0; i < endpointRequests.length; i++) {
    if (!ipCount[endpointRequests[i].ip_address]) ipCount[endpointRequests[i].ip_address] = 1
    else if (ipCount[endpointRequests[i].ip_address]) ipCount[endpointRequests[i].ip_address] ++
  }

  for (const ip in ipCount) {
    sortable.push([ip, ipCount[ip]]);
    ipAddresses.push(ip)
    ipOccurrence.push(ipCount[ip])
  }

  const options = {
    // responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Most calls to API',
      },
    },
  };

  const data = {
    labels: ipAddresses,
    datasets: [
      {
        label: '# of calls to API',
        data: ipOccurrence,
        backgroundColor: [
          '#003f5c',
          '#444e86',
          '#955196',
          '#dd5182',
          '#ff6e54',
          '#ffa600',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
      <Doughnut data={data} options={options} />
  ) 
}
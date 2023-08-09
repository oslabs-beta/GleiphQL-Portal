import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import useStore from '../store';
import { EndpointRequest, PartialStore } from '../../types';

ChartJS.register(ArcElement, Tooltip, Legend);


export function DonutObjectChart() {
  const { endpointRequests } : PartialStore = useStore();
  const objectTypeCount: any = {}
  const objectTypes: string[] = []
  const objectTypeOccurrence: number[] = []
  let sortable: any = []


  for (let i = 0; i < endpointRequests.length; i++) {
    for (let j = 0; j < endpointRequests[i].object_types.objectTypes.length; j++) {
      if (!objectTypeCount[endpointRequests[i].object_types.objectTypes[j]]) {
        objectTypeCount[endpointRequests[i].object_types.objectTypes[j]] = 1
      }
      else if (objectTypeCount[endpointRequests[i].object_types.objectTypes[j]]) {
        objectTypeCount[endpointRequests[i].object_types.objectTypes[j]] ++
      }
    }
  }

  for (const objectType in objectTypeCount) {
    sortable.push([objectType, objectTypeCount[objectType]]);
  }

  sortable.sort(function(a: any, b: any) {
    return b[1] - a[1]; // Reverse order
  });

  sortable = sortable.slice(0, 6) 

  for (let i = 0; i < sortable.length; i++) {
    objectTypes.push(sortable[i][0])
    objectTypeOccurrence.push(sortable[i][1])
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
        text: 'Most queried Object Types',
      },
    },
  };

  const data = {
    labels: objectTypes,
    datasets: [
      {
        label: '# of times queried',
        data: objectTypeOccurrence,
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
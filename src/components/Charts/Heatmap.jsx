import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { faker } from '@faker-js/faker';

const fakerData = () => faker.datatype.number({ min: 0, max: 30});

class Heatmap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'Metric1',
        data: Array.from({length: 15}, () => fakerData())
      },
      {
        name: 'Metric2',
        data: Array.from({length: 15}, () => fakerData())
      },
      {
        name: 'Metric3',
        data: Array.from({length: 15}, () => fakerData())
      },
      {
        name: 'Metric4',
        data: Array.from({length: 15}, () => fakerData()) 
      },
      {
        name: 'Metric5',
        data: Array.from({length: 15}, () => fakerData())
      },
      {
        name: 'Metric6',
        data: Array.from({length: 15}, () => fakerData())
      },
      {
        name: 'Metric7',
        data: Array.from({length: 15}, () => fakerData())
      },
      {
        name: 'Metric8',
        data: Array.from({length: 15}, () => fakerData())
      },
      {
        name: 'Metric9',
        data: Array.from({length: 15}, () => fakerData())
      }
      ],
      options: {
        chart: {
          type: 'heatmap',
          toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: true,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false,
            }
          }, 
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#008FFB"],
      },
    };
  }


  render() {
    return (
      <ReactApexChart 
      options={this.state.options} 
      series={this.state.series}
      type="heatmap" 
      height="100%" 
      />
    );
  }
}

export default Heatmap
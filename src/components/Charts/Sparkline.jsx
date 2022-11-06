import React from 'react'
import ReactApexChart from 'react-apexcharts';

const chartData = [
  {
    data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
  }
];

const chartOptions = {
  chart: {
    type: 'line',
    sparkline: {
      enabled: true
    }, 
    toolbar: {
      show: false, 
    },
  },
  stroke: {
    curve: "straight", 
    width: 2
  },
  legend: {
    show: false
  },
  grid: {
    show: false, 
  }, 
  xaxis: {
    labels: {
      show: false, 
    }
  },
  yaxis: {
    labels: {
      show: false, 
    }
  }
};

class Sparkline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartOptions: chartOptions,
      chartData: chartData,
    });
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        height={"50px"}
        width={"100px"}
      />
    );
  }
}

export default Sparkline

// const chartOptions = {
//   chart: {
//     type: 'line',
//     width: 100,
//     height: 35,
//     sparkline: {
//       enabled: true
//     }
//   },
//   legend: {
//     show: false,
//   },
//   toolbar: {
//     show: false,
//   },
//   tooltip: {
//     fixed: {
//       enabled: false
//     },
//     x: {
//       show: false
//     },
//     y: {
//       title: {
//         formatter: function (seriesName) {
//           return ''
//         }
//       }
//     },
//     marker: {
//       show: false
//     }
//   },
//   xaxis: {
//     lines: {
//       show: false
//     },
//     axisBorder: {
//       show: false
//     },
//     axisTicks: {
//       show: false
//     },
//     labels: {
//       show: false
//     }
//   },
//   yaxis: {
//     lines: {
//       show: false
//     },
//     labels: {
//       show: false
//     }
//   },
// };
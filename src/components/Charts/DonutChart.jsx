import React from 'react'; 
import ReactApexChart from 'react-apexcharts'; 

class DonutChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                dataLabels: {
                    enabled: false
                },
                pie: {    
                    expandOnClick: false,
                },
                donut: {
                    labels: {
                        show: false,
                        name: {
                            show: false
                        }
                    }
                },
                legend: {
                    show: false
                  },
                //   responsive: [{
                //     breakpoint: 480,
                //     options: {
                //       chart: {
                //         width: 200
                //       },
                //       legend: {
                //         position: 'bottom'
                //       }
                //     }
                //   }]
            },
            series: [15, 4]
        };
    }

    render() {
        return (
            <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="donut"
                width="130"
            />
        );
    }
}

export default DonutChart
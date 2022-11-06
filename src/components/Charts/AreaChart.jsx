import React from 'react';
import ReactApexChart from 'react-apexcharts';

const lineChartData = [
    {
        name: "Mobile apps",
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
    {
        name: "Websites",
        data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
    },
];

const lineChartOptions = {
    chart: {
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
              pan: true,
              reset: true,
            }
        }, 
    },
    tooltip: {
        theme: "dark",
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },
    xaxis: {
        type: "datetime",
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        labels: {
            style: {
                colors: "#c8cfca",
                fontSize: "12px",
            },
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: "#c8cfca",
                fontSize: "12px",
            },
        },
    },
    legend: {
        show: false,
    },
    grid: {
        strokeDashArray: 5,
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 0.8,
            opacityTo: 0,
            stops: [],
        },
        colors: ["#8AD5FE", "#2D3748"],
    },
    colors: ["#8AD5FE", "#2D3748"],
};


class AreaChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: [],
            chartOptions: {},
        };
    }

    componentDidMount() {
        this.setState({
            chartData: lineChartData,
            chartOptions: lineChartOptions,
        });
    }

    render() {
        return (
            <ReactApexChart
                options={this.state.chartOptions}
                series={this.state.chartData}
                type="area"
                width="100%"
                height="100%"
            />
        );
    }
}

export default AreaChart
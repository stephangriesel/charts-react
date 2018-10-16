import React, { Component } from "react";
import Chart from "react-apexcharts";

class RockChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: "#0000FF",
          foreColor: "#FFFFFF"
        },
        xaxis: {
          categories: [
            "Amsterdam",
            "Rotterdam",
            "The Hague",
            "Utrecht",
            "Eindhoven",
            "Tilburg"
          ]
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        fill: {
          colors: ["#FFA500"]
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: "Largest Cities By Population (Netherlands)",
          align: "center",
          padding: 20,
          offsetY: 20,
          style: {
            color: "#FFFFFF",
            fontSize: "1.5em"
          }
        }
      },
      series: {
        name: "Population",
        data: [741636, 598199, 474292, 290529, 209620, 199613]
      }
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        height="500"
        width="100%"
      />
    );
  }
}

export default RockChart;

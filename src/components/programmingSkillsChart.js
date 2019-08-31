import React, { Component } from "react"
import { Doughnut} from "react-chartjs-2"
import 'chartjs-plugin-deferred';

export default class ProgrammingSkillsChart extends Component {
    render() {
        const htmlCss = {
            datasets: [
              {
                data: [300, 50],
                label: 'HTML & CSS',
                backgroundColor: ["#3e6d3eb0", "transparent"],
                hoverBackgroundColor: ["#3e6d3eb0", "transparent"],
                borderColor: "transparent",
              },
            ],
          }
          const javascript = {
            datasets: [
              {
                data: [120, 70],
                label: 'Javascript',
                backgroundColor: ["#bb5b63b0", "transparent"],
                hoverBackgroundColor: ["#bb5b63b0", "transparent"],
                borderColor: "transparent",
              },
            ],
          }
          const php = {
            datasets: [
              {
                data: [100, 100],
                label: 'PHP',
                backgroundColor: ["#4976a7b0", "transparent"],
                hoverBackgroundColor: ["#4976a7b0", "transparent"],
                borderColor: "transparent",
              },
            ],
          }
          const react = {
            datasets: [
              {
                data: [90, 190],
                label: 'React',
                backgroundColor: ["#da9c58", "transparent"],
                hoverBackgroundColor: ["#da9c58", "transparent"],
                borderColor: "transparent",
              },
            ],
          }
         
      
          const options = {
            cutoutPercentage: 80,
            animation: {
              easing: 'easeOutCirc'
            },
            maintainAspectRatio:false,
            tooltips:{
              enabled: false
           },
           plugins: {
              deferred: {
                xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
                yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
                delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
              }
          },
          plugins: {
              datalabels: {
                  display: false,
              }
          }
      
          }

          
        return(
    <div className="doughnut">
        <div className="doughnut--chart">
          <Doughnut data={javascript} options={options}  />
          <h5 className="doughnut__name">Javascript</h5>
        </div>
        <div className="doughnut--chart">
          <Doughnut data={htmlCss} options={options}  />
          <h5 className="doughnut__name">HTML&CSS</h5>
        </div>
        <div className="doughnut--chart">
          <Doughnut data={php} options={options}  />
          <h5 className="doughnut__name">PHP</h5>
        </div>
        <div className="doughnut--chart">
          <Doughnut data={react} options={options}  />
          <h5 className="doughnut__name">React</h5>
        </div>
      
    </div>
        )
          
    }
}
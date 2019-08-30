import React, { Component } from "react"
import { Doughnut, HorizontalBar, Polar} from "react-chartjs-2"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import 'chartjs-plugin-deferred';
// import ChartDataLabels from 'chartjs-plugin-datalabels';


export default class SampleChart extends Component {
  render() {

    {/*doughnut chart*/}
    const htmlCss = {
      datasets: [
        {
          data: [300, 50],
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

    {/* Horizontal bar */}
  const data =  {
      
      labels: ['Photoshop','Lightroom','Illustrator','XD'],
      datasets: [
          {
            labels: ['Photoshop','Lightroom','Illustrator','XD'],
            backgroundColor: ["rgb(0,153,161)", "rgb(250,229,214)","rgb(196,117,80)","rgb(239,187,63)"],
            data: [8, 13, 5, 5, 2, 3]
          }
        ],
}

  const options2 = {
    
    legend: {
        display: false
     },
    plugins: {
        deferred: {
          xOffset: 150,   
          yOffset: '50%', 
          delay: 500   
        }
    } ,
    tooltips:{
        enabled: false
     },
     scales: {
         yAxes: [{
             barThickness: 60,
            barPercentage: 5.0,
            // ticks: {
            //     callback: function(value, index, values) {
            //         return null;
            //     }
            // },
            gridLines: {
                color: "transparent",
                display: true,
                drawBorder: false
            }
           
        }],
        xAxes: [{
            barThickness: 60,
            ticks: {
                callback: function(value, index, values) {
                    return null;
                }
            },
            gridLines: {
                color: "transparent",
                display: true,
                drawBorder: false
            }
        }]
    }
  }

  const polardata = {
   
        labels: ["Photography", "Cooking", "Fika", "Eating", "Traveling", "Training", "Design"],
        datasets: [{
          backgroundColor: [
            "rgb(239,186,120)",
            "rgb(121,151,151)",
            "rgb(253,234,227)",
            "rgb(223,205,170)",
            "rgb(243,172,148)",
            "rgb(187,217,215)",
            "rgb(150,96,103)",

          ],
          borderColor: 'transparent',
          data: [23, 25, 30, 30, 26, 20, 28]
  }]};
  

  const options3 = {
    plugins: {
      deferred: {
        xOffset: 150,   
        yOffset: '50%', 
        delay: 500   
      }
  } ,
  tooltips:{
    enabled: false
 },
 scales: {
     yAxes: [{
        ticks: {
            callback: function(value, index, values) {
                return null;
            }
        },
        gridLines: {
            color: "transparent",
            display: true,
            drawBorder: false
        }
       
    }],
    xAxes: [{
        ticks: {
            callback: function(value, index, values) {
                return null;
            }
        },
        gridLines: {
            color: "transparent",
            display: true,
            drawBorder: false
        }
    }]
}
  }
  

    return (
      <Layout>
        　　　　
        <h1
          css={css`
            display: inline-block;
          `}
        >
          My Skills
        </h1>

        <h2 css={css`text-align: center; margin-top:10%;`}>Programming Skills</h2>
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
      
        </div>{/*.doughnut */}

        <h2 css={css`text-align: center; margin-top:10%;`}>Adobe Skills</h2>
        <div className="barchart">
        <HorizontalBar data={data} options={options2} />
        </div>

        <h2 css={css`text-align: center; margin-top:10%;`}>Hobby Skills</h2>
        <div className="chartcontrol">
          <Polar data={polardata} options={options3}/>
         </div>

        
       
      </Layout>
    )
  }
}

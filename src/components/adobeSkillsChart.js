import React, { Component } from "react"
import { HorizontalBar} from "react-chartjs-2"
import 'chartjs-plugin-deferred';


export default class AdobeSkillsChart extends Component {
    render() {
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

const options = {
  
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
return(
            <div className="barchart">
        <HorizontalBar data={data} options={options} />
        </div>
)

    }
}
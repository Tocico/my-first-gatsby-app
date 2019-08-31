import React, { Component } from "react"
import { Polar} from "react-chartjs-2"
import 'chartjs-plugin-deferred';


export default class HobbySkillsChart extends Component {
    render() {
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
      
    
      const options = {
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
        }],
        animation:{
          easing: 'easeInOutExpo'
        }
    }
      }
return(
      <div className="chartcontrol">
          <Polar data={polardata} options={options}/>
         </div>  
)

    }
}
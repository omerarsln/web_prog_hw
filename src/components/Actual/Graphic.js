import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import "./Graphic.css"
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graphic extends Component {
    render() {
        const options = {
            animationEnabled: true,
            title:{
                text: "2020 Günlük Vakalar"
            },
            axisX: {
                valueFormatString: "MMM"
            },
            axisY: {
                title: "Vaka Sayısı",
                prefix: "",
                includeZero: false
            },
            data: [{
                yValueFormatString: "#,###",
                xValueFormatString: "MMMMD",
                type: "spline",
                dataPoints: [
                    { x: new Date(2020, 2, 11), y: 1 },
                    { x: new Date(2020, 2, 20), y: 359 },
                    { x: new Date(2020, 2, 22), y: 1236 },
                    { x: new Date(2020, 2, 24), y: 1872 },
                    { x: new Date(2020, 2, 26), y: 3629 },
                    { x: new Date(2020, 2, 28), y: 7400 },
                    { x: new Date(2020, 2, 31), y: 13531 },
                    { x: new Date(2020, 3, 5), y: 27069 },
                ]
            }]
        }

        return (
            <div className="graphic">
                <CanvasJSChart options = {options}/>
            </div>
        );
    }
}

export default Graphic;
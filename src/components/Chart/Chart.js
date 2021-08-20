import React from 'react'; 
import ChartBar from './ChartBar';
import './Chart.css';


const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); 
    //dataPointValues is still an array but with spread it becomes arguments
    const totalMax = Math.max(...dataPointValues);


    return <div className="chart">
        {props.dataPoints.map((dataPoint) => ( 
        <ChartBar 
            key={dataPoint.label} 
            value={dataPoint.value} 
            maxValue={totalMax} 
            label={dataPoint.Label}></ChartBar>))}

    </div>
    

}

export default Chart; 
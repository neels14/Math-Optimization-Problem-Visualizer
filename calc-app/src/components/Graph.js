import {LineChart} from 'react-easy-chart';
import React from 'react'

function getData(min, max, step, length, width) {
  var dataArray = []

  for(var i = min; i < max; i += step) {
    var point = LineChart.data = { x: i, y:(length - 2*i) *(width - 2 *i) *i };
    dataArray.push(point);
  }
  console.log(dataArray);
  return [dataArray];
}


export default function Graph() {
  return (
    <div>
      <LineChart data={getData(0, 30, 0.1, 30, 60)} width={50} height={50}/>
    </div>
  )
}

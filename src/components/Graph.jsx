import { useRef, useEffect, useMemo } from 'react';
import Chart from 'chart.js/auto';

const Graph = (props) => {
  const canvasRef = useRef()

  // render graph when canvasRef catches the element at it's creation
  let myChart;
  useEffect(() => {
    if (canvasRef) {
      myChart = new Chart(
        canvasRef.current,
        config
      );
    }    
  }, [canvasRef]);

  
  const graphValues = props.data.map(value => {
    const date = new Date(value.t);

    const x = `${date.getDate()}/${date.getMonth() + 1}`;
    const y = value.c;

    return {x, y}
  })

  console.log(graphValues);

  const data = {
    datasets: [{
      label: `${props.ticker} value`,
      backgroundColor: 'rgb(99, 169, 255)',
      borderColor: 'rgba(90, 203, 255, 0.476)',
      data: graphValues,
      tension: 0.4,
      pointRadius: 0,
    }]
  }

  // const data = {
  //   labels: labels,
  //   datasets: [{
  //     label: 'My First dataset',
  //     backgroundColor: 'rgb(255, 99, 132)',
  //     borderColor: 'rgb(255, 99, 132)',
  //     data: [0, 10, 5, 2, 20, 30, 45],
  //   }]
  // };

  const config = {
    type: 'line',
    data: data,
    options: {
      plugins: {
        tooltip: {
          intersect: true,
          backgroundColor: '#0000004e'
        },
        legend: {
          display: false
        }
      }
    }
  };

  return <canvas className={props.className} ref={canvasRef}></canvas>
}

export default Graph;
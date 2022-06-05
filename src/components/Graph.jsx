import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const Graph = (props) => {
  const canvasRef = useRef()

  let myChart;
  useEffect(() => {
    console.log('hits');
    if (canvasRef) {
      myChart = new Chart(
        canvasRef.current,
        config
      );
    }    
  }, [canvasRef]);

  
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  return <canvas className={props.className} ref={canvasRef}></canvas>
}

export default Graph;
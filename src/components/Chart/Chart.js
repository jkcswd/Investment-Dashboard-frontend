import useD3 from '../../hooks/useD3';
import './Chart.css'
const Chart = (props) => {
  const svgRef = useD3(props.d3Func, props.chartData);

  return (
    <div className='Chart'>  
      <svg ref={svgRef} viewBox="0 0 600 300">
        <path d="" fill="none" stroke="black" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

export default Chart;

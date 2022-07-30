import useD3 from '../hooks/useD3';
import d3Func from '../d3Functions/d3Func';


const Chart = (props) => {
  const svgRef = useD3(d3Func, props.chartData);

  return (
    <div className='Chart'>  
      <svg ref={svgRef} viewBox="0 0 500 150">
        <path d="" fill="none" stroke="black" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

export default Chart;

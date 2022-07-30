import * as d3 from 'd3';
import { useEffect, useRef} from 'react';


const Chart = (props) => {
  const width = 500;
  const height = 150;
  const padding = 20;

  const svgRef = useRef();
  console.log(props)

  useEffect(()=> {
      const xScale = d3.scalePoint().domain(props.chartData.map(d => d.date)).range([(0+padding), (width-padding)]);
      const yScale = d3.scaleLinear().domain([0, d3.max(props.chartData, d => d.adjClose)]).range([(height-padding), (0+padding)]);
      const line = d3.line().x(d => xScale(d.date)).y(d => yScale(d.adjClose));
      const xAxis = d3.axisBottom(xScale)
      const yAxis = d3.axisLeft(yScale)

      d3.select('#xaxis').remove()
      d3.select(svgRef.current)
         .append('g')
         .attr('transform',`translate(0,${height - padding})`)
         .attr('id','xaxis')
         .call(xAxis)
       
     d3.select('#yaxis').remove()
     d3.select(svgRef.current)
         .append('g')
         .attr('transform',`translate(${padding},0)`)
         .attr('id','yaxis')
         .call(yAxis)   
  
      d3.select(svgRef.current).select('path').attr('d',value => line(props.chartData)).attr('fill', 'none').attr('stroke', 'black');

  },[props.chartData])

  return (
    <div className='Chart'>  
      <svg ref={svgRef} viewBox="0 0 500 150">
        <path d="" fill="none" stroke="black" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

export default Chart;

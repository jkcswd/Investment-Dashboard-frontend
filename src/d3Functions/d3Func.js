import * as d3 from 'd3';

const d3Func = (data, ref) => {//convert to date on x 
  const width = 600;
  const height = 300;
  const padding = 50;
  const xScale = d3.scaleTime().domain(d3.extent(data, d => new Date(d.date))).range([(0+padding), (width-padding)]);
  const yScale = d3.scaleLinear().domain(d3.extent(data, d => d.adjClose)).range([(height-padding), (0+padding)]);
  const line = d3.line().x(d => xScale(new Date(d.date))).y(d => yScale(d.adjClose));
  const xAxis = d3.axisBottom(xScale).ticks(5)
  const yAxis = d3.axisLeft(yScale)

  d3.select('#xaxis').remove()
  d3.select(ref.current)
      .append('g')
      .style("font", "5px")
      .attr('transform',`translate(0,${height - padding})`)
      .attr('id','xaxis')
      .call(xAxis)
    
  d3.select('#yaxis').remove()
  d3.select(ref.current)
      .append('g')
      .attr('transform',`translate(${padding},0)`)
      .attr('id','yaxis')
      .call(yAxis)   

  d3.select(ref.current).select('path').attr('d',value => line(data)).attr('stroke', 'blue');
}

export default d3Func;
import * as d3 from 'd3';

const d3Func = (data, ref) => {
  const width = 500;
  const height = 150;
  const padding = 20;
  const svgRef = ref;
  const xScale = d3.scalePoint().domain(data.map(d => d.date)).range([(0+padding), (width-padding)]);
  const yScale = d3.scaleLinear().domain([0, d3.max(data, d => d.adjClose)]).range([(height-padding), (0+padding)]);
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

  d3.select(svgRef.current).select('path').attr('d',value => line(data)).attr('fill', 'none').attr('stroke', 'black');
}

export default d3Func;
const trafficGraph = d3.select(".trafficGraph");
const trafficLine = d3.select(".trafficLine");
const mobileUsers = d3.select(".mobileUsers");
const socialStats = d3.select(".socialStats");
const newMembers = d3.select(".newMembers");
const recentActivity = d3.select(".recentActivity");
const settings = d3.select(".settings");


// trafficLine.selectAll("div")
//     .data(data)
//     .enter().append("div")
//     .style("height", function(d) { return d * 10 + "px"; })
//     .text(function(d) { return d; })
//     .style("color", "white")
//     .style("width", "40px")
//     .style("margin", "10px")
//     .style("text-align", "center")
//     .style("background-color", "#8764B8");;


var visitors = [
  {visits: 50, day: 'Monday'},
  {visits: 38, day: 'Tuesday'},
  {visits: 47, day: 'Wednesday'},
  {visits: 59, day: 'Thursday'},
  {visits: 30, day: 'Friday'},
  {visits: 80, day: 'Saturday'},
  {visits: 13, day: 'Sunday'},
];

var day = visitors.map(function(t) {
  return t.day
});

const margin = {top: 5, right: 5, bottom: 50, left: 50};
const fullWidth = 200;
const fullHeight = 250;
const width = fullWidth - margin.right - margin.left;
const height = fullHeight - margin.top - margin.bottom;
const svg = trafficLine.append('svg')
  .attr('width', fullWidth)
  .attr('height', fullHeight)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

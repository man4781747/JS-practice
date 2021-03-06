
var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: 'markers',
  name: 'Scatter'
};

var trace2 = {
  x: [2, 3, 4, 5],
  y: [16, 5, 11, 9],
  mode: 'lines',
  name: 'Lines'
};

var trace3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: 'lines+markers',
  name: 'Scatter + Lines'
};

var data = [ trace1, trace2, trace3 ];

var layout = {
  title:'Adding Names to Line and Scatter Plot'
};

// Plotly.newPlot('myDiv', data, layout);
function setup() {
  Plotly.newPlot('myDiv', data, layout);
}

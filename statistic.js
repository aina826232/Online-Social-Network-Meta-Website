<script src="https://www.gstatic.com/charts/loader.js"></script>

<div id="myChart" style="width:100%; max-width:600px; height:500px;"></div>

<script>
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

// Set Data
const data = google.visualization.arrayToDataTable([
  ['Years', 'Total Users (Billion)'],
  ['2024',3.07],
  ['2023',3.07],
  ['2022',2.96],
  ['2021',2.91],
  ['2020',2.80]
]);

// Set Options
const options = {
  title:'Facebooks Monthly Active Users Over The Years '
};

// Draw
const chart = new google.visualization.BarChart(document.getElementById('myChart'));
chart.draw(data, options);

}
</script>
new Chart(document.getElementById("chart"), {
  type: 'bar',
  data: {
    labels: ["2005", "2010", "2015", "2020"],
    datasets: [
      {
        label: "Assets Under Management ($M)",
        backgroundColor: "#317A8F",
        data: [5,8,12,18]
      }, 
    ]
  },
  options: {
    title: {
      display: false,
      text: 'GlobalMacro AUM',
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: 'white'
        }
      }]
    },
  },
});
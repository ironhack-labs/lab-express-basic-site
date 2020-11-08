console.log ("Hello there")

var dData = function() {
    return Math.round(Math.random() * 90) + 10
  };
  
  var barChartData = {
    labels: ["dD 1", "dD 2", "dD 3", "dD 4", "dD 5", "dD 6", "dD 7", "dD 8", "dD 9", "dD 10"],
    datasets: [{
      fillColor: "rgba(0,60,100,1)",
      strokeColor: "black",
      data: [dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData(), dData()]
    }]
  }
  
  var index = 11;
  var ctx = document.getElementById("canvas").getContext("2d");
  var barChartDemo = new Chart(ctx).Bar(barChartData, {
    responsive: true,
    barValueSpacing: 2
  });
  setInterval(function() {
    barChartDemo.removeData();
    barChartDemo.addData([dData()], "dD " + index);
    index++;
  }, 3000);
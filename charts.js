var trafficLine = document.getElementById("week");
var week = new Chart(trafficLine, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            data: [40, 130, 200, 150, 250, 230, 120, 300],
            backgroundColor: [
              '#7377BF',
              '#7377BF',
              '#7377BF',
              '#7377BF',
              '#7377BF',
              '#7377BF',
              '#7377BF'
            ],
            borderWidth: 0
        }]
    },
    options: {
        tooltips: {
            mode: 'index'
        },
        cornerRadius : 20,
        legend: {
          display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var mobileDonut = document.getElementById("pie");
var mobileUsers = new Chart(mobileDonut, {
    type: 'doughnut',
    data: {
        labels: [
        'Phones',
        'Tablets',
        'Desktop'
        ],
        datasets: [{
            data: [15, 15, 70],
            backgroundColor: [
              '#73B1BF',
              '#81C98F',
              '#7377BF'
            ]}
          ]},
    options: {
      legend : {
        position: "right",
      }
    }
});

var traffic = document.getElementById("traffic");
var myLineChart = new Chart(traffic, {
    type: 'line',
          data: {
            datasets: [
              {
              data: [700, 1300, 1000, 1500, 1700, 2000, 1300, 1500, 1000, 1500, 1200, 2500],
              borderColor : "#7377BF",
              backgroundColor : "#E2E3F6",
              borderWidth : "2",
              pointBorderWidth : "4",
              pointRadius : 5,
            }],
        labels: ['16-22', '23-29', '30-5', '6-12',"13-19", '20-26', '27-3', "4-10","11-17", "18-24","25-31"],

    },

    options: {
      elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        },
        legend: {
          display : false
        },
        plugins: {
           filler: {
               propagate: true
           }
       }
  }}
);

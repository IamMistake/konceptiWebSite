const dataLine = [
    ["Jan 1 2010", 100],
    ["Jul 1 2010", 200],
    ["Jan 1 2011", 100],
    ["Jul 1 2011", 200],
    ["Jan 1 2012", 400],
    ["Jul 1 2012", 200],
    ["Jan 1 2013", 100],
    ["Jul 1 2013", 200],
    ["Jan 1 2014", 100],
    ["Jul 1 2014", 200],
    ["Jan 1 2015", 100],
    ["Jul 1 2015", 200],
    ["Jan 1 2016", 100],
    ["Jul 1 2016", 200],
    ["Jan 1 2017", 100],
    ["Jul 1 2017", 200],
    ["Jan 1 2018", 100],
    ["Jul 1 2018", 200],
    ["Jan 1 2019", 400],
    ["Jul 1 2019", 200],
    ["Jan 1 2020", 100],
    ["Jul 1 2020", 200],
    ["Jan 1 2021", 100],
    ["Jul 1 2021", 200],
    ["Jan 1 2022", 100],
    ["Jul 1 2022", 200],
    ["Jan 1 2023", 100],
    ["Jul 1 2023", 200],
    ["Jan 1 2024", 100],
    ["Jul 1 2024", 500]
]


function makeMovingLine() {
    // Initialize empty data for the line chart
    let data = {
        labels: [],
        datasets: [{
            label: 'Data',
            data: [],
            borderColor: 'rgb(30,119,24)', // Line color
            borderWidth: 2,
            fill: false
        }]
    };

// Configuration options
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

// Get the context of the canvas element we want to select
    const ctx = document.getElementById('movingLineChart').getContext('2d');

// Create the line chart with initial empty data
    const movingLineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });

// Function to generate random data and update the chart
    let brojac = 0
    function updateChart() {
        movingLineChart.data.labels.push(dataLine[brojac][0]);
        movingLineChart.data.datasets[0].data.push(dataLine[brojac][1]);

        brojac++

        if (movingLineChart.data.labels.length > dataLine.length) {
            movingLineChart.data.labels.shift();
            movingLineChart.data.datasets[0].data.shift();
        }

        movingLineChart.update();
    }

    setInterval(updateChart, 500);
}

makeMovingLine()
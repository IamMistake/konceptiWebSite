
// Sample data for the graph
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
    datasets: [{
        label: 'Sales',
        backgroundColor: 'rgba(255,255,255,0.63)', // Bar color
        borderColor: 'rgb(58,100,45)',
        borderWidth: 2,
        data: [200, 350, 280, 450, 300, 800, 1200, 100] // Data values
    }]
};

// Configuration options
const options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                fontColor: 'white', // Set text color to white
                color: 'white' // Set line color to white
            },
            gridLines: {
                color: 'white' // Set grid line color to white
            }
        }],
        xAxes: [{
            ticks: {
                fontColor: 'white', // Set text color to white
                color: 'white' // Set line color to white
            },
            gridLines: {
                color: 'white' // Set grid line color to white
            }
        }]
    }
};

// Get the context of the canvas element we want to select
const ctx = document.getElementById('pillarGraph').getContext('2d');

// Create the pillar graph
const myPillarGraph = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
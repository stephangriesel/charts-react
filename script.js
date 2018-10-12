// Options 
// Cities data: https://population.mongabay.com/population/netherlands/
const options = {
    chart: {
        height:450,
        width:'100%',
        type: 'bar',
        background: '#000000',
        foreColor:'#FFFFFF'
    },
    series: [{
        name: 'Population',
        data: [741636,598199,474292,290529,209620,199613]
    }],
    xaxis: {
        categories: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven', 'Tilburg']
    }
};

// Initialize
const chart = new ApexCharts(document.querySelector('#chart'), options);

// Render
chart.render();
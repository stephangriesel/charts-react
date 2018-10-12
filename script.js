// Options 
// Cities data: https://population.mongabay.com/population/netherlands/
const options = {
    chart: {
        height:450,
        width:'100%',
        type: 'bar',
        background: '#0000FF',
        foreColor:'#FFFFFF'
    },
    series: [{
        name: 'Population',
        data: [741636,598199,474292,290529,209620,199613]
    }],
    xaxis: {
        categories: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven', 'Tilburg']
    },
    plotOptions: {
        bar: {
            horizontal: false
        }
    },
    fill: {
        colors: ['#FFA500']
    },
    dataLabels: {
        enabled:false
    },
    title: {
        text: 'Largest Cities By Population (Netherlands)',
        align: 'center',
        padding: 20,
        offsetY: 20,
        style: {
            color:'#FFFFFF',
            fontSize:'1.5em',
        }
    }
};

// Initialize
const chart = new ApexCharts(document.querySelector('#chart'), options);

// Render
chart.render();
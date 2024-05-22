// Width and height of the SVG
const width = 960;
const height = 600;

// Create an SVG element
const svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height);

// Define the projection and path
const projection = d3.geoMercator()
    .center([21.7453, 41.6086]) // Center the map on Macedonia
    .scale(8000)
    .translate([width / 2, height / 2]);

const path = d3.geoPath().projection(projection);

// Define the tooltip
const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// Load geographic data and create the map
d3.json("https://raw.githubusercontent.com/deldersveld/topojson/master/countries/north-macedonia/north-macedonia-municipalities.json").then(macedonia => {
    // Draw the map
    svg.append("g")
        .selectAll("path")
        .data(topojson.feature(macedonia, macedonia.objects.MKD_adm1).features)
        .enter().append("path")
        .attr("d", path)
        .attr("fill", "#ccc")
        .attr("stroke", "#333");

    // Sample data: municipalities with their coordinates and some values
    const data = [
        { name: 'Skopje', value: 500000, coordinates: [21.4314, 41.9981] },
        { name: 'Bitola', value: 95000, coordinates: [21.3376, 41.0305] },
        { name: 'Kumanovo', value: 105000, coordinates: [21.7257, 42.1351] },
        { name: 'Prilep', value: 76000, coordinates: [21.5543, 41.3451] },
        { name: 'Tetovo', value: 52000, coordinates: [20.9715, 42.0106] },
        { name: 'Veles', value: 44000, coordinates: [21.7751, 41.7152] },
        { name: 'Ohrid', value: 42000, coordinates: [20.8016, 41.1172] },
        { name: 'Gostivar', value: 41000, coordinates: [20.9089, 41.7984] },
        { name: 'Strumica', value: 35000, coordinates: [22.6411, 41.4379] },
        { name: 'Kavadarci', value: 38000, coordinates: [21.9982, 41.4331] },
        { name: 'Kočani', value: 34000, coordinates: [22.4128, 41.9165] },
        { name: 'Kičevo', value: 31000, coordinates: [20.9525, 41.5120] },
        { name: 'Štip', value: 43000, coordinates: [22.1950, 41.7450] },
        { name: 'Radoviš', value: 16000, coordinates: [22.4647, 41.6383] },
        { name: 'Gevgelija', value: 15000, coordinates: [22.5128, 41.1414] }
    ];

    // Define the scale for the bubble size
    const radius = d3.scaleSqrt()
        .domain([0, d3.max(data, d => d.value)])
        .range([0, 20]);

    // Add the bubbles
    svg.append("g")
        .selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr("class", "bubble")
        .attr("cx", d => projection(d.coordinates)[0])
        .attr("cy", d => projection(d.coordinates)[1])
        .attr("r", d => radius(d.value))
        .attr("fill", "steelblue")
        .on("mouseover", function(event, d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html(d.name + "<br/>" + d.value)
                .style("left", (event.pageX + 5) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function(d) {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
});
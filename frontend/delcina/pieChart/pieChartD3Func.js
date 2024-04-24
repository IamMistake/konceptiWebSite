// Sample data for the pie chart
const data = [
    { label: 'M', value: 0 },
    { label: 'Skopje', value: 80 },
    { label: 'Prilep', value: 30 },
    { label: 'Bitola', value: 30 },
    { label: 'Ohrid', value: 35 }
];

// Set up dimensions and radius for the pie chart
const width = 500;
const height = 500;
const radius = Math.min(width, height) / 2;

// Set up color scale with green shades
const color = d3.scaleOrdinal()
    .domain(data.map(d => d.label))
    .range(d3.schemeGreens[data.length]);         //MENUVAJNE NA BOJA

// Create the pie chart layout
const pie = d3.pie()
    .value(d => d.value)
    .sort(null);

// Define arc generator
const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius);

// Create SVG element
const svg = d3.select("#pie-chart")
    .append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);

// Draw the pie chart
const arcs = svg.selectAll(".arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "arc");

// Add gradients
const gradients = arcs.append("linearGradient")
    .attr("id", (d, i) => `gradient${i}`)
    .attr("gradientUnits", "userSpaceOnUse")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", "100%")
    .attr("y2", "100%");

gradients.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", (d, i) => d3.rgb(color(i)).brighter(0));

gradients.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", color);

arcs.append("path")
    .attr("d", arc)
    .attr("fill", (d, i) => `url(#gradient${i})`);

// Add labels to each slice
arcs.append("text")
    .attr("transform", d => `translate(${arc.centroid(d)})`)
    .attr("text-anchor", "middle")
    .text(d => d.data.label)
    .attr("class", "slice");
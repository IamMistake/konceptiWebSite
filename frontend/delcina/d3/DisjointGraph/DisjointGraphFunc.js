const svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

// Sample data for municipalities in Macedonia
const graph = {
    nodes: [
        { id: 'Skopje', group: 1 },
        { id: 'Bitola', group: 1 },
        { id: 'Kumanovo', group: 2 },
        { id: 'Prilep', group: 2 },
        { id: 'Tetovo', group: 3 },
        { id: 'Veles', group: 3 },
        { id: 'Ohrid', group: 4 },
        { id: 'Gostivar', group: 4 },
        { id: 'Strumica', group: 5 },
        { id: 'Kavadarci', group: 5 },
        { id: 'Kočani', group: 6 },
        { id: 'Kičevo', group: 6 },
        { id: 'Štip', group: 7 },
        { id: 'Radoviš', group: 7 },
        { id: 'Gevgelija', group: 8 }
    ],
    links: [
        { source: 'Skopje', target: 'Bitola' },
        { source: 'Kumanovo', target: 'Prilep' },
        { source: 'Tetovo', target: 'Veles' },
        { source: 'Ohrid', target: 'Gostivar' },
        { source: 'Strumica', target: 'Kavadarci' },
        { source: 'Kočani', target: 'Kičevo' },
        { source: 'Štip', target: 'Radoviš' },
        // Add more links if necessary
        { source: 'Bitola', target: 'Prilep' },
        { source: 'Skopje', target: 'Prilep' },
    ]
};

const color = d3.scaleOrdinal(d3.schemeCategory10);

const simulation = d3.forceSimulation(graph.nodes)
    .force("link", d3.forceLink(graph.links).id(d => d.id).distance(100))
    .force("charge", d3.forceManyBody().strength(-150))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("x", d3.forceX(width / 2).strength(0.035))
    .force("y", d3.forceY(height / 2).strength(0.035));

const link = svg.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
    .attr("class", "link")
    .attr("stroke-width", 2);

const node = svg.append("g")
    .attr("class", "nodes")
    .selectAll("g")
    .data(graph.nodes)
    .enter().append("g")
    .attr("class", "node");

node.append("circle")
    .attr("r", 10)
    .attr("fill", d => color(d.group));

node.append("text")
    .attr("dy", -3)
    .attr("dx", 12)
    .text(d => d.id);

simulation
    .nodes(graph.nodes)
    .on("tick", ticked);

simulation.force("link")
    .links(graph.links);

function ticked() {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("transform", d => `translate(${d.x},${d.y})`);
}

// Add drag capabilities
node.call(d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended));

function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}
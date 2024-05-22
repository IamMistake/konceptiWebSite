// Sample data for the bubble chart
const data = [
    { name: 'Skopje', value: 500000 },
    { name: 'Bitola', value: 95000 },
    { name: 'Kumanovo', value: 105000 },
    { name: 'Prilep', value: 76000 },
    { name: 'Tetovo', value: 52000 },
    { name: 'Veles', value: 44000 },
    { name: 'Ohrid', value: 42000 },
    { name: 'Gostivar', value: 41000 },
    { name: 'Strumica', value: 35000 },
    { name: 'Kavadarci', value: 38000 },
    { name: 'Kočani', value: 34000 },
    { name: 'Kičevo', value: 31000 },
    { name: 'Štip', value: 43000 },
    { name: 'Radoviš', value: 16000 },
    { name: 'Gevgelija', value: 15000 }
];

const width = 800;
const height = 800;

const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height);

const color = d3.scaleOrdinal(d3.schemeCategory10);

const pack = d3.pack()
    .size([width, height])
    .padding(1.5);

const root = d3.hierarchy({ children: data })
    .sum(d => d.value);

const nodes = pack(root).leaves();

const node = svg.selectAll("g")
    .data(nodes)
    .enter().append("g")
    .attr("transform", d => `translate(${d.x},${d.y})`);

node.append("circle")
    .attr("r", d => d.r)
    .attr("fill", (d, i) => color(i));

node.append("text")
    .attr("class", "bubble")
    .attr("dy", "0.3em")
    .text(d => d.data.name);

node.append("title")
    .text(d => `${d.data.name}\n${d.data.value}`);

let bubbles = document.getElementsByTagName('g')
for (let bubble of bubbles) {
    bubble.addEventListener('click', () => {
        let ime = bubble.getElementsByTagName('text')[0].innerHTML
        alert(ime)
    })
}
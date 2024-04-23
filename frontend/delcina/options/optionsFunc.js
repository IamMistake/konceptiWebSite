const optionsDisplay = document.getElementsByClassName('optionsDisplay')[0]
const displays = {
    // "Locations": `<div style="font-size: 5rem">Locations</div>`,
    "Locations": `<div id="optionsMapLoc"></div>`,
    "Area": `<div style="font-size: 5rem">Area</div>`,
    "Statistics": `<div id="statisticsOption">
            <div id="optionsStatistics">
            
            </div>
            <div id="optionsStatisticsList">
                <div onclick="displayStat(this, 'timeline')" class="statisticsList selected"><i class="fa-solid fa-sliders"></i></div>
                <div onclick="displayStat(this, 'pillars')" class="statisticsList"><i class="fa-solid fa-chart-simple"></i></div>
                <div onclick="displayStat(this, 'pie')" class="statisticsList"><i class="fa-solid fa-circle-half-stroke"></i></div>
                <div onclick="displayStat(this, 'graph')" class="statisticsList"><i class="fa-solid fa-arrow-trend-up"></i></div>
                <div onclick="displayStat(this, 'notes')" class="statisticsList"><i class="fa-solid fa-address-book"></i></div>
            </div>
        </div>`,
}
const statDisplays = {
    // "timeline": `<div style="font-size: 5rem">bars</div>`,
    "timeline": `<div class="timeline">
    <div class="timelineDim">
        <div class="indent">
            <h1>Timeline</h1>
            <div class="textBox">
                <h4>Macedonia</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div class="line">
                <div class="lineInfo" id="info1">
                    <div class="date">2016</div>
                    <div class="textBox">
                        <h4>Macedonia</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div class="lineInfo" id="info2">
                    <div class="date">2017</div>
                    <div class="textBox">
                        <h4>Republic Macedonia</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div class="lineInfo" id="info3">
                    <div class="date">2018</div>
                    <div class="textBox">
                        <h4>Republic North Macedonia</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted.</p>
                    </div>
                </div>
                <div class="lineInfo" id="info4">
                    <div class="date">2019</div>
                    <div class="textBox">
                        <h4>Republic North Macedonia</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>
                </div>
                <div class="lineInfo" id="info5">
                    <div class="date">2020</div>
                    <div class="textBox">
                        <h4>Republic North Macedonia</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
    "pillars": `<div style="font-size: 5rem">Pillar</div>`,
    "pie": `<div style="font-size: 5rem">pie</div>`,
    "graph": `<div style="font-size: 5rem">graph</div>`,
    "notes": `<div style="font-size: 5rem">notes</div>`,
}

function removeDisplayed() {
    const options = document.getElementsByClassName('displayed')
    for (let option of options) {
        option.classList.remove('displayed')
    }
}

function changeDisplay(btn) {
    if (btn.classList.contains('displayed')) return
    removeDisplayed()
    btn.classList.add('displayed')

    optionsDisplay.innerHTML = displays[btn.innerHTML.toString()]

    if (btn.innerHTML.toString() === 'Statistics') {
        const optDis = document.getElementById('optionsStatistics')
        optDis.innerHTML = statDisplays['timeline'] // SO PRVO DA SE POKAZUVA
    } else if (btn.innerHTML.toString() === 'Locations') {
        spawnMap()
    }
}

function removeSelected() {
    const selected = document.getElementsByClassName('selected')
    for (let selectedElement of selected) {
        selectedElement.classList.remove('selected')
    }
}

function displayStat(btn, stat) {
    if (btn.classList.contains('selected')) return
    removeSelected()
    btn.classList.add('selected')

    const optDis = document.getElementById('optionsStatistics')
    optDis.innerHTML = statDisplays[stat]
}





 // MAPA LOCATIONS MAPA LOCATIONS MAPA LOCATIONS MAPA LOCATIONS MAPA LOCATIONS
 // MAPA LOCATIONS MAPA LOCATIONS MAPA LOCATIONS MAPA LOCATIONS MAPA LOCATIONS
 // MAPA LOCATIONS MAPA LOCATIONS MAPA LOCATIONS MAPA LOCATIONS MAPA LOCATIONS
maptilersdk.config.apiKey = '28X7x2vtR4iZb6S98Fot';
const listaMarkers = {
    "Centar": [21.74, 41.60],
    "Prilep": [21.565, 41.37],
    "Bitola": [21.34, 41.05],
    "Skopje": [21.44, 42.02],
}

function spawnMap() {
    const optionsMapLoc = new maptilersdk.Map({
        container: 'optionsMapLoc', // container's id or the HTML element to render the map
        style: maptilersdk.MapStyle.DATAVIZ.DARK,
        center: [21.74, 41.60], // starting position [lng, lat]
        zoom: 8, // starting zoom
    });

    for (let listaMarkersKey in listaMarkers) {
        let coords = listaMarkers[listaMarkersKey]
        const marker = new maptilersdk.Marker({
            color: "#ce4444",
            draggable: false
        }).setLngLat(coords)
            .setPopup(new maptilersdk.Popup().setHTML(listaMarkersKey))
            .addTo(optionsMapLoc);
    }
}
spawnMap()
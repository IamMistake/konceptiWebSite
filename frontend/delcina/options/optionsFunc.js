const optionsDisplay = document.getElementsByClassName('optionsDisplay')[0]
const displays = {
    "Locations": `<div style="font-size: 5rem">Locations</div>`,
    "Area": `<div style="font-size: 5rem">Area</div>`,
    "Statistics": `<div id="statisticsOption">
            <div id="optionsStatistics">
                
            </div>
            <div id="optionsStatisticsList">
                <div onclick="displayStat(this, 'pillars')" class="statisticsList selected"><i class="fa-solid fa-chart-simple"></i></div>
                <div onclick="displayStat(this, 'pie')" class="statisticsList"><i class="fa-solid fa-circle-half-stroke"></i></div>
                <div onclick="displayStat(this, 'graph')" class="statisticsList"><i class="fa-solid fa-arrow-trend-up"></i></div>
                <div onclick="displayStat(this, 'notes')" class="statisticsList"><i class="fa-solid fa-address-book"></i></div>
                <div onclick="displayStat(this, 'bars')" class="statisticsList"><i class="fa-solid fa-sliders"></i></div>
            </div>
        </div>`,
}
const statDisplays = {
    "pillars": `<div style="font-size: 5rem">Pillar</div>`,
    "pie": `<div style="font-size: 5rem">pie</div>`,
    "graph": `<div style="font-size: 5rem">graph</div>`,
    "notes": `<div style="font-size: 5rem">notes</div>`,
    "bars": `<div style="font-size: 5rem">bars</div>`,
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
        optDis.innerHTML = statDisplays['pillars']
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
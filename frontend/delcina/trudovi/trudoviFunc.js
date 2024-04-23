const card_container = document.getElementsByClassName('card__container')[0]
const iframeSpace = document.getElementById('trudovi1').children[0]
const list_docs = [
    "OperativniSistemi",
    "spisok",
    "vestacka",
    "youtube",
    "VizuelnoProgramirajne"
]

function loadDocuments() {
    let br = 1
    for (let name of list_docs) {
        let elem = createElem(name, br);
        card_container.innerHTML += elem
        br++
    }
    iframeSpace.innerHTML = `<iframe src="docs/${list_docs[0]}.pdf" frameBorder="0"></iframe>`
}

function clearActive() {
    let Ps = card_container.getElementsByClassName('active')
    for (let p of Ps) {
        p.setAttribute("class", "element")
    }
}

function loadPreview(btn) {
    let name = btn.attributes.ime.value
    clearActive()
    btn.setAttribute("class", "element active")
    iframeSpace.innerHTML = `<iframe src="docs/${name}.pdf" frameBorder="0"></iframe>`
}

function insertSpacesBeforeUppercase(str) {
    return str.replace(/([A-Z])/g, ' $1');
}

function createElem(name, br) {
    if (br === 1) return `<p onclick="loadPreview(this)" ime="${name}" class="element active">${insertSpacesBeforeUppercase(name)}</p>`
    return `<p onclick="loadPreview(this)" ime="${name}" class="element">${insertSpacesBeforeUppercase(name)}</p>`
}

loadDocuments()

maptilersdk.config.apiKey = '28X7x2vtR4iZb6S98Fot';

const map = new maptilersdk.Map({
    container: 'map', // container's id or the HTML element to render the map
    style: maptilersdk.MapStyle.DATAVIZ.DARK,
    center: [21.74, 41.60], // starting position [lng, lat]
    zoom: 8.1, // starting zoom
});

const centar = new maptilersdk.Marker({
    color: "#ce4444",
    draggable: false
}).setLngLat([21.74, 41.60])
    .setPopup(new maptilersdk.Popup().setHTML("Centar"))
    .addTo(map);

const prilep = new maptilersdk.Marker({
    color: "#ce4444",
    draggable: false
}).setLngLat([21.565, 41.37])
    .setPopup(new maptilersdk.Popup().setHTML("Prilep"))
    .addTo(map);

const bitola = new maptilersdk.Marker({
    color: "#ce4444",
    draggable: false
}).setLngLat([21.34, 41.05])
    .setPopup(new maptilersdk.Popup().setHTML("Bitola"))
    .addTo(map);

const skopje = new maptilersdk.Marker({
    color: "#ce4444",
    draggable: false
}).setLngLat([21.44, 42.02])
    .setPopup(new maptilersdk.Popup().setHTML("Skopje"))
    .addTo(map);

// const popup = new maptilersdk.Popup({ closeOnClick: false, closeButton: false })
//     .setHTML("&lt;h1&gt;Hello World!&lt;/h1&gt;")
//     .trackPointer()
//     .addTo(map);



const markerHeight = 50, markerRadius = 10, linearOffset = 25;
const popupOffsets = {
    'top': [0, 0],
    'top-left': [0,0],
    'top-right': [0,0],
    'bottom': [0, -markerHeight],
    'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'left': [markerRadius, (markerHeight - markerRadius) * -1],
    'right': [-markerRadius, (markerHeight - markerRadius) * -1]
};
const popup = new maptilersdk.Popup({offset: popupOffsets, className: 'my-class'})
    .setLngLat([21.90, 41.60])
    .setHTML("&lt;h1&gt;Hello World!&lt;/h1&gt;")
    .setMaxWidth("300px")
    // .addTo(map);
var mymap = L.map('mapid').setView([52.1, 6.1], 10);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGlla2UxOCIsImEiOiJjam5yZDd0MnIwMW9wM3FzNXExMHJ6MG5nIn0.iyEfspnssHxzGdZDWa1_aA'
}).addTo(mymap);


// Layers <-- Hier voeg je lagen toe aan Leaflet

var geoJsonLayer = L.geoJson(stadsgezichten_proj, {style: style,}).addTo(mymap);

function style(feature) {
    return {
        fillColor: '#8B5C72',
        fillOpacity: 1
    };
}

var layer = L.geoJSON(stadsgezichten_proj, {
    onEachFeature: function (f, l) {
      l.bindPopup('<pre>'+JSON.stringify(f.properties,null,' ').replace(/[\{\}"]/g,'')+'</pre>');
    }
   }).addTo(mymap);
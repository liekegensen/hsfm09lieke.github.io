require([
"esri/config",
"esri/Map", 
"esri/views/MapView",

"esri/layers/FeatureLayer",


], function(esriConfig,Map, MapView, FeatureLayer) {

  esriConfig.apiKey = "AAPK2a2d1c0981c743cf9f4707c7f979dae1nzLIIJeZsmfszqifA-YMc1F0KAitKUVBQoiHIQ2vOoQi1Bmav16qUhDjTxSeRiz9";

  const map = new Map({
basemap: "arcgis-topographic" // Basemap layer
});



const view = new MapView({
map: map,
center: [5.83162, 52.07878],
zoom: 10, // scale: 72223.819286
container: "viewDiv",
constraints: {
snapToZoom: false
}
});

// Define a pop-up for Trailheads
const popupTrailheads = {
"title": "Monument",
"content": "<b>Gemeente:</b> {Gemeente}<br><b>Plaats:</b> {Plaats}<br><b>Straat:</b> {Type}<br><b>Type:</b> {Type_objec}<br><b>Status:</b> {Status}<br><b>Functie:</b> {Functie}<br><b>Bouwjaar:</b> {Bouwjaar_v}<br><b>Waarderings:</b> {Waardering}ft"
}

//Monumenten feature layer (points)
const trailheads = new FeatureLayer({
url: "https://services2.arcgis.com/rtefou6JFIxFvYTf/arcgis/rest/services/monumenten_gelderland/FeatureServer",
outFields: ["TRL_NAME","CITY_JUR","X_STREET","PARKING","ELEV_FT"],
popupTemplate: popupTrailheads
});

map.add(trailheads);


});


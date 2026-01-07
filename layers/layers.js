var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_reszekkorvonal_1 = new ol.format.GeoJSON();
var features_reszekkorvonal_1 = format_reszekkorvonal_1.readFeatures(json_reszekkorvonal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reszekkorvonal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reszekkorvonal_1.addFeatures(features_reszekkorvonal_1);
var lyr_reszekkorvonal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reszekkorvonal_1, 
                style: style_reszekkorvonal_1,
                popuplayertitle: 'reszek - korvonal',
                interactive: true,
    title: 'reszek - korvonal<br />\
    <img src="styles/legend/reszekkorvonal_1_0.png" /> <br />\
    <img src="styles/legend/reszekkorvonal_1_1.png" /> ccc<br />\
    <img src="styles/legend/reszekkorvonal_1_2.png" /> <br />\
    <img src="styles/legend/reszekkorvonal_1_3.png" /> <br />\
    <img src="styles/legend/reszekkorvonal_1_4.png" /> <br />\
    <img src="styles/legend/reszekkorvonal_1_5.png" /> <br />' });
var format_Extractedlocation_2 = new ol.format.GeoJSON();
var features_Extractedlocation_2 = format_Extractedlocation_2.readFeatures(json_Extractedlocation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Extractedlocation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Extractedlocation_2.addFeatures(features_Extractedlocation_2);
var lyr_Extractedlocation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Extractedlocation_2, 
                style: style_Extractedlocation_2,
                popuplayertitle: 'Extracted (location)',
                interactive: true,
                title: '<img src="styles/legend/Extractedlocation_2.png" /> Extracted (location)'
            });

lyr_OSMStandard_0.setVisible(true);lyr_reszekkorvonal_1.setVisible(true);lyr_Extractedlocation_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_reszekkorvonal_1,lyr_Extractedlocation_2];
lyr_reszekkorvonal_1.set('fieldAliases', {'fid': 'fid', });
lyr_Extractedlocation_2.set('fieldAliases', {'lat': 'lat', 'lon': 'lon', 'street': 'street', 'no': 'no', 'zip': 'zip', 'city': 'city', '11': '11', 'web_label': 'web_label', });
lyr_reszekkorvonal_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_Extractedlocation_2.set('fieldImages', {'lat': 'TextEdit', 'lon': 'TextEdit', 'street': 'TextEdit', 'no': 'TextEdit', 'zip': 'Range', 'city': 'TextEdit', '11': 'TextEdit', 'web_label': 'TextEdit', });
lyr_reszekkorvonal_1.set('fieldLabels', {'fid': 'no label', });
lyr_Extractedlocation_2.set('fieldLabels', {'lat': 'no label', 'lon': 'no label', 'street': 'no label', 'no': 'inline label - always visible', 'zip': 'no label', 'city': 'no label', '11': 'no label', 'web_label': 'no label', });
lyr_Extractedlocation_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
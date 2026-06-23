var wms_layers = [];


        var lyr_ESRITopo_0 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_AdministrasiGubeng_1 = new ol.format.GeoJSON();
var features_AdministrasiGubeng_1 = format_AdministrasiGubeng_1.readFeatures(json_AdministrasiGubeng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdministrasiGubeng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiGubeng_1.addFeatures(features_AdministrasiGubeng_1);
var lyr_AdministrasiGubeng_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdministrasiGubeng_1, 
                style: style_AdministrasiGubeng_1,
                popuplayertitle: 'Administrasi Gubeng',
                interactive: true,
                title: '<img src="styles/legend/AdministrasiGubeng_1.png" /> Administrasi Gubeng'
            });
var format_BangunanGubeng_2 = new ol.format.GeoJSON();
var features_BangunanGubeng_2 = format_BangunanGubeng_2.readFeatures(json_BangunanGubeng_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanGubeng_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanGubeng_2.addFeatures(features_BangunanGubeng_2);
var lyr_BangunanGubeng_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanGubeng_2, 
                style: style_BangunanGubeng_2,
                popuplayertitle: 'Bangunan Gubeng',
                interactive: true,
                title: '<img src="styles/legend/BangunanGubeng_2.png" /> Bangunan Gubeng'
            });
var format_JalanGubeng_3 = new ol.format.GeoJSON();
var features_JalanGubeng_3 = format_JalanGubeng_3.readFeatures(json_JalanGubeng_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanGubeng_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanGubeng_3.addFeatures(features_JalanGubeng_3);
var lyr_JalanGubeng_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanGubeng_3, 
                style: style_JalanGubeng_3,
                popuplayertitle: 'Jalan Gubeng',
                interactive: true,
                title: '<img src="styles/legend/JalanGubeng_3.png" /> Jalan Gubeng'
            });
var format_Buffer600m_4 = new ol.format.GeoJSON();
var features_Buffer600m_4 = format_Buffer600m_4.readFeatures(json_Buffer600m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer600m_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer600m_4.addFeatures(features_Buffer600m_4);
var lyr_Buffer600m_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer600m_4, 
                style: style_Buffer600m_4,
                popuplayertitle: 'Buffer 600m',
                interactive: true,
                title: '<img src="styles/legend/Buffer600m_4.png" /> Buffer 600m'
            });
var format_Bangunan600m_5 = new ol.format.GeoJSON();
var features_Bangunan600m_5 = format_Bangunan600m_5.readFeatures(json_Bangunan600m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan600m_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan600m_5.addFeatures(features_Bangunan600m_5);
var lyr_Bangunan600m_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan600m_5, 
                style: style_Bangunan600m_5,
                popuplayertitle: 'Bangunan 600m',
                interactive: true,
                title: '<img src="styles/legend/Bangunan600m_5.png" /> Bangunan 600m'
            });
var format_Buffer300m_6 = new ol.format.GeoJSON();
var features_Buffer300m_6 = format_Buffer300m_6.readFeatures(json_Buffer300m_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer300m_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer300m_6.addFeatures(features_Buffer300m_6);
var lyr_Buffer300m_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer300m_6, 
                style: style_Buffer300m_6,
                popuplayertitle: 'Buffer 300m',
                interactive: true,
                title: '<img src="styles/legend/Buffer300m_6.png" /> Buffer 300m'
            });
var format_Bangunan300m_7 = new ol.format.GeoJSON();
var features_Bangunan300m_7 = format_Bangunan300m_7.readFeatures(json_Bangunan300m_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan300m_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan300m_7.addFeatures(features_Bangunan300m_7);
var lyr_Bangunan300m_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan300m_7, 
                style: style_Bangunan300m_7,
                popuplayertitle: 'Bangunan 300m',
                interactive: true,
                title: '<img src="styles/legend/Bangunan300m_7.png" /> Bangunan 300m'
            });
var format_ServiceArea600m_8 = new ol.format.GeoJSON();
var features_ServiceArea600m_8 = format_ServiceArea600m_8.readFeatures(json_ServiceArea600m_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceArea600m_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea600m_8.addFeatures(features_ServiceArea600m_8);
var lyr_ServiceArea600m_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea600m_8, 
                style: style_ServiceArea600m_8,
                popuplayertitle: 'Service Area 600m',
                interactive: true,
                title: '<img src="styles/legend/ServiceArea600m_8.png" /> Service Area 600m'
            });
var format_ServiceArea300m_9 = new ol.format.GeoJSON();
var features_ServiceArea300m_9 = format_ServiceArea300m_9.readFeatures(json_ServiceArea300m_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceArea300m_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea300m_9.addFeatures(features_ServiceArea300m_9);
var lyr_ServiceArea300m_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea300m_9, 
                style: style_ServiceArea300m_9,
                popuplayertitle: 'Service Area 300m',
                interactive: true,
                title: '<img src="styles/legend/ServiceArea300m_9.png" /> Service Area 300m'
            });
var format_MajidBesarGubeng_10 = new ol.format.GeoJSON();
var features_MajidBesarGubeng_10 = format_MajidBesarGubeng_10.readFeatures(json_MajidBesarGubeng_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajidBesarGubeng_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajidBesarGubeng_10.addFeatures(features_MajidBesarGubeng_10);
var lyr_MajidBesarGubeng_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajidBesarGubeng_10, 
                style: style_MajidBesarGubeng_10,
                popuplayertitle: 'Majid Besar Gubeng',
                interactive: true,
                title: '<img src="styles/legend/MajidBesarGubeng_10.png" /> Majid Besar Gubeng'
            });
var format_MasjidBesarPoint_11 = new ol.format.GeoJSON();
var features_MasjidBesarPoint_11 = format_MasjidBesarPoint_11.readFeatures(json_MasjidBesarPoint_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasjidBesarPoint_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasjidBesarPoint_11.addFeatures(features_MasjidBesarPoint_11);
var lyr_MasjidBesarPoint_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasjidBesarPoint_11, 
                style: style_MasjidBesarPoint_11,
                popuplayertitle: 'Masjid Besar Point',
                interactive: true,
                title: '<img src="styles/legend/MasjidBesarPoint_11.png" /> Masjid Besar Point'
            });

lyr_ESRITopo_0.setVisible(true);lyr_AdministrasiGubeng_1.setVisible(true);lyr_BangunanGubeng_2.setVisible(true);lyr_JalanGubeng_3.setVisible(true);lyr_Buffer600m_4.setVisible(true);lyr_Bangunan600m_5.setVisible(true);lyr_Buffer300m_6.setVisible(true);lyr_Bangunan300m_7.setVisible(true);lyr_ServiceArea600m_8.setVisible(true);lyr_ServiceArea300m_9.setVisible(true);lyr_MajidBesarGubeng_10.setVisible(true);lyr_MasjidBesarPoint_11.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_AdministrasiGubeng_1,lyr_BangunanGubeng_2,lyr_JalanGubeng_3,lyr_Buffer600m_4,lyr_Bangunan600m_5,lyr_Buffer300m_6,lyr_Bangunan300m_7,lyr_ServiceArea600m_8,lyr_ServiceArea300m_9,lyr_MajidBesarGubeng_10,lyr_MasjidBesarPoint_11];
lyr_AdministrasiGubeng_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'type': 'type', 'name': 'name', 'boundary': 'boundary', 'admin_leve': 'admin_leve', });
lyr_BangunanGubeng_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', 'luas (m2)': 'luas (m2)', });
lyr_JalanGubeng_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'cutting': 'cutting', 'descriptio': 'descriptio', 'noname': 'noname', 'tunnel': 'tunnel', 'maxheight': 'maxheight', 'import': 'import', 'maxspeed_t': 'maxspeed_t', 'lit': 'lit', 'covered': 'covered', 'footway': 'footway', 'cycleway_l': 'cycleway_l', 'lanes_forw': 'lanes_forw', 'lanes_back': 'lanes_back', 'junction': 'junction', 'cycleway_r': 'cycleway_r', 'horse': 'horse', 'lane_marki': 'lane_marki', 'service': 'service', 'motorcar_c': 'motorcar_c', 'hgv': 'hgv', 'moped': 'moped', 'mofa': 'mofa', 'maxspeed': 'maxspeed', 'oneway_mot': 'oneway_mot', 'motorcar': 'motorcar', 'oneway_m_1': 'oneway_m_1', 'oneway_mop': 'oneway_mop', 'oneway_bic': 'oneway_bic', 'motor_vehi': 'motor_vehi', 'postal_cod': 'postal_cod', 'cycleway': 'cycleway', 'bicycle': 'bicycle', 'sidewalk': 'sidewalk', 'name_etymo': 'name_etymo', 'name_ety_1': 'name_ety_1', 'alt_name': 'alt_name', 'layer': 'layer', 'bridge': 'bridge', 'access': 'access', 'foot': 'foot', 'width': 'width', 'surface': 'surface', 'smoothness': 'smoothness', 'motorcycle': 'motorcycle', 'oneway': 'oneway', 'name': 'name', 'lanes': 'lanes', 'highway': 'highway', });
lyr_Buffer600m_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'wheelchair': 'wheelchair', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'name_etymo': 'name_etymo', 'name_ety_1': 'name_ety_1', 'backup_gen': 'backup_gen', 'capacity_p': 'capacity_p', 'building_w': 'building_w', 'building_s': 'building_s', 'building_r': 'building_r', 'building_l': 'building_l', 'building_f': 'building_f', 'building_c': 'building_c', 'addr_full': 'addr_full', 'access_roo': 'access_roo', 'religion': 'religion', 'name': 'name', 'denominati': 'denominati', 'building': 'building', 'amenity': 'amenity', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'type': 'type', 'start': 'start', 'luas (m2)': 'luas (m2)', });
lyr_Bangunan600m_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', 'luas (m2)': 'luas (m2)', 'luas layan': 'luas layan', 'persentase': 'persentase', });
lyr_Buffer300m_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'wheelchair': 'wheelchair', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'name_etymo': 'name_etymo', 'name_ety_1': 'name_ety_1', 'backup_gen': 'backup_gen', 'capacity_p': 'capacity_p', 'building_w': 'building_w', 'building_s': 'building_s', 'building_r': 'building_r', 'building_l': 'building_l', 'building_f': 'building_f', 'building_c': 'building_c', 'addr_full': 'addr_full', 'access_roo': 'access_roo', 'religion': 'religion', 'name': 'name', 'denominati': 'denominati', 'building': 'building', 'amenity': 'amenity', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'type': 'type', 'start': 'start', 'luas (m2)': 'luas (m2)', });
lyr_Bangunan300m_7.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', 'luas (m2)': 'luas (m2)', 'luas layan': 'luas layan', 'persentase': 'persentase', });
lyr_ServiceArea600m_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'wheelchair': 'wheelchair', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'name_etymo': 'name_etymo', 'name_ety_1': 'name_ety_1', 'backup_gen': 'backup_gen', 'capacity_p': 'capacity_p', 'building_w': 'building_w', 'building_s': 'building_s', 'building_r': 'building_r', 'building_l': 'building_l', 'building_f': 'building_f', 'building_c': 'building_c', 'addr_full': 'addr_full', 'access_roo': 'access_roo', 'religion': 'religion', 'name': 'name', 'denominati': 'denominati', 'building': 'building', 'amenity': 'amenity', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'type': 'type', 'start': 'start', });
lyr_ServiceArea300m_9.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'wheelchair': 'wheelchair', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'name_etymo': 'name_etymo', 'name_ety_1': 'name_ety_1', 'backup_gen': 'backup_gen', 'capacity_p': 'capacity_p', 'building_w': 'building_w', 'building_s': 'building_s', 'building_r': 'building_r', 'building_l': 'building_l', 'building_f': 'building_f', 'building_c': 'building_c', 'addr_full': 'addr_full', 'access_roo': 'access_roo', 'religion': 'religion', 'name': 'name', 'denominati': 'denominati', 'building': 'building', 'amenity': 'amenity', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'type': 'type', 'start': 'start', });
lyr_MajidBesarGubeng_10.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'wheelchair': 'wheelchair', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'name_etymo': 'name_etymo', 'name_ety_1': 'name_ety_1', 'backup_gen': 'backup_gen', 'capacity_p': 'capacity_p', 'building_w': 'building_w', 'building_s': 'building_s', 'building_r': 'building_r', 'building_l': 'building_l', 'building_f': 'building_f', 'building_c': 'building_c', 'addr_full': 'addr_full', 'access_roo': 'access_roo', 'religion': 'religion', 'name': 'name', 'denominati': 'denominati', 'building': 'building', 'amenity': 'amenity', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'luas (m2)': 'luas (m2)', });
lyr_MasjidBesarPoint_11.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'wheelchair': 'wheelchair', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'name_etymo': 'name_etymo', 'name_ety_1': 'name_ety_1', 'backup_gen': 'backup_gen', 'capacity_p': 'capacity_p', 'building_w': 'building_w', 'building_s': 'building_s', 'building_r': 'building_r', 'building_l': 'building_l', 'building_f': 'building_f', 'building_c': 'building_c', 'addr_full': 'addr_full', 'access_roo': 'access_roo', 'religion': 'religion', 'name': 'name', 'denominati': 'denominati', 'building': 'building', 'amenity': 'amenity', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'Foto': 'Foto', });
lyr_AdministrasiGubeng_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'boundary': 'TextEdit', 'admin_leve': 'TextEdit', });
lyr_BangunanGubeng_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'luas (m2)': 'Range', });
lyr_JalanGubeng_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'cutting': 'TextEdit', 'descriptio': 'TextEdit', 'noname': 'TextEdit', 'tunnel': 'TextEdit', 'maxheight': 'TextEdit', 'import': 'TextEdit', 'maxspeed_t': 'TextEdit', 'lit': 'TextEdit', 'covered': 'TextEdit', 'footway': 'TextEdit', 'cycleway_l': 'TextEdit', 'lanes_forw': 'TextEdit', 'lanes_back': 'TextEdit', 'junction': 'TextEdit', 'cycleway_r': 'TextEdit', 'horse': 'TextEdit', 'lane_marki': 'TextEdit', 'service': 'TextEdit', 'motorcar_c': 'TextEdit', 'hgv': 'TextEdit', 'moped': 'TextEdit', 'mofa': 'TextEdit', 'maxspeed': 'TextEdit', 'oneway_mot': 'TextEdit', 'motorcar': 'TextEdit', 'oneway_m_1': 'TextEdit', 'oneway_mop': 'TextEdit', 'oneway_bic': 'TextEdit', 'motor_vehi': 'TextEdit', 'postal_cod': 'TextEdit', 'cycleway': 'TextEdit', 'bicycle': 'TextEdit', 'sidewalk': 'TextEdit', 'name_etymo': 'TextEdit', 'name_ety_1': 'TextEdit', 'alt_name': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'access': 'TextEdit', 'foot': 'TextEdit', 'width': 'TextEdit', 'surface': 'TextEdit', 'smoothness': 'TextEdit', 'motorcycle': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'lanes': 'TextEdit', 'highway': 'TextEdit', });
lyr_Buffer600m_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'wheelchair': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'name_etymo': 'TextEdit', 'name_ety_1': 'TextEdit', 'backup_gen': 'TextEdit', 'capacity_p': 'TextEdit', 'building_w': 'TextEdit', 'building_s': 'TextEdit', 'building_r': 'TextEdit', 'building_l': 'TextEdit', 'building_f': 'TextEdit', 'building_c': 'TextEdit', 'addr_full': 'TextEdit', 'access_roo': 'TextEdit', 'religion': 'TextEdit', 'name': 'TextEdit', 'denominati': 'TextEdit', 'building': 'TextEdit', 'amenity': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'luas (m2)': '', });
lyr_Bangunan600m_5.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'luas (m2)': 'TextEdit', 'luas layan': 'TextEdit', 'persentase': 'TextEdit', });
lyr_Buffer300m_6.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'wheelchair': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'name_etymo': 'TextEdit', 'name_ety_1': 'TextEdit', 'backup_gen': 'TextEdit', 'capacity_p': 'TextEdit', 'building_w': 'TextEdit', 'building_s': 'TextEdit', 'building_r': 'TextEdit', 'building_l': 'TextEdit', 'building_f': 'TextEdit', 'building_c': 'TextEdit', 'addr_full': 'TextEdit', 'access_roo': 'TextEdit', 'religion': 'TextEdit', 'name': 'TextEdit', 'denominati': 'TextEdit', 'building': 'TextEdit', 'amenity': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'luas (m2)': 'TextEdit', });
lyr_Bangunan300m_7.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'luas (m2)': 'TextEdit', 'luas layan': 'TextEdit', 'persentase': 'TextEdit', });
lyr_ServiceArea600m_8.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'wheelchair': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'name_etymo': 'TextEdit', 'name_ety_1': 'TextEdit', 'backup_gen': 'TextEdit', 'capacity_p': 'TextEdit', 'building_w': 'TextEdit', 'building_s': 'TextEdit', 'building_r': 'TextEdit', 'building_l': 'TextEdit', 'building_f': 'TextEdit', 'building_c': 'TextEdit', 'addr_full': 'TextEdit', 'access_roo': 'TextEdit', 'religion': 'TextEdit', 'name': 'TextEdit', 'denominati': 'TextEdit', 'building': 'TextEdit', 'amenity': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_ServiceArea300m_9.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'wheelchair': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'name_etymo': 'TextEdit', 'name_ety_1': 'TextEdit', 'backup_gen': 'TextEdit', 'capacity_p': 'TextEdit', 'building_w': 'TextEdit', 'building_s': 'TextEdit', 'building_r': 'TextEdit', 'building_l': 'TextEdit', 'building_f': 'TextEdit', 'building_c': 'TextEdit', 'addr_full': 'TextEdit', 'access_roo': 'TextEdit', 'religion': 'TextEdit', 'name': 'TextEdit', 'denominati': 'TextEdit', 'building': 'TextEdit', 'amenity': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_MajidBesarGubeng_10.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'wheelchair': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'name_etymo': 'TextEdit', 'name_ety_1': 'TextEdit', 'backup_gen': 'TextEdit', 'capacity_p': 'TextEdit', 'building_w': 'TextEdit', 'building_s': 'TextEdit', 'building_r': 'TextEdit', 'building_l': 'TextEdit', 'building_f': 'TextEdit', 'building_c': 'TextEdit', 'addr_full': 'TextEdit', 'access_roo': 'TextEdit', 'religion': 'TextEdit', 'name': 'TextEdit', 'denominati': 'TextEdit', 'building': 'TextEdit', 'amenity': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'luas (m2)': '', });
lyr_MasjidBesarPoint_11.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'wheelchair': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'name_etymo': 'TextEdit', 'name_ety_1': 'TextEdit', 'backup_gen': 'TextEdit', 'capacity_p': 'TextEdit', 'building_w': 'TextEdit', 'building_s': 'TextEdit', 'building_r': 'TextEdit', 'building_l': 'TextEdit', 'building_f': 'TextEdit', 'building_c': 'TextEdit', 'addr_full': 'TextEdit', 'access_roo': 'TextEdit', 'religion': 'TextEdit', 'name': 'TextEdit', 'denominati': 'TextEdit', 'building': 'TextEdit', 'amenity': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_AdministrasiGubeng_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'type': 'no label', 'name': 'no label', 'boundary': 'no label', 'admin_leve': 'no label', });
lyr_BangunanGubeng_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', 'luas (m2)': 'no label', });
lyr_JalanGubeng_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'cutting': 'no label', 'descriptio': 'no label', 'noname': 'no label', 'tunnel': 'no label', 'maxheight': 'no label', 'import': 'no label', 'maxspeed_t': 'no label', 'lit': 'no label', 'covered': 'no label', 'footway': 'no label', 'cycleway_l': 'no label', 'lanes_forw': 'no label', 'lanes_back': 'no label', 'junction': 'no label', 'cycleway_r': 'no label', 'horse': 'no label', 'lane_marki': 'no label', 'service': 'no label', 'motorcar_c': 'no label', 'hgv': 'no label', 'moped': 'no label', 'mofa': 'no label', 'maxspeed': 'no label', 'oneway_mot': 'no label', 'motorcar': 'no label', 'oneway_m_1': 'no label', 'oneway_mop': 'no label', 'oneway_bic': 'no label', 'motor_vehi': 'no label', 'postal_cod': 'no label', 'cycleway': 'no label', 'bicycle': 'no label', 'sidewalk': 'no label', 'name_etymo': 'no label', 'name_ety_1': 'no label', 'alt_name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'access': 'no label', 'foot': 'no label', 'width': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'motorcycle': 'no label', 'oneway': 'no label', 'name': 'inline label - always visible', 'lanes': 'no label', 'highway': 'inline label - always visible', });
lyr_Buffer600m_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'wheelchair': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'name_etymo': 'no label', 'name_ety_1': 'no label', 'backup_gen': 'no label', 'capacity_p': 'no label', 'building_w': 'no label', 'building_s': 'no label', 'building_r': 'no label', 'building_l': 'no label', 'building_f': 'no label', 'building_c': 'no label', 'addr_full': 'no label', 'access_roo': 'no label', 'religion': 'no label', 'name': 'inline label - always visible', 'denominati': 'no label', 'building': 'no label', 'amenity': 'no label', 'addr_stree': 'no label', 'addr_city': 'no label', 'type': 'no label', 'start': 'no label', 'luas (m2)': 'inline label - always visible', });
lyr_Bangunan600m_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'inline label - always visible', 'type': 'no label', 'luas (m2)': 'inline label - always visible', 'luas layan': 'inline label - always visible', 'persentase': 'inline label - always visible', });
lyr_Buffer300m_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'wheelchair': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'name_etymo': 'no label', 'name_ety_1': 'no label', 'backup_gen': 'no label', 'capacity_p': 'no label', 'building_w': 'no label', 'building_s': 'no label', 'building_r': 'no label', 'building_l': 'no label', 'building_f': 'no label', 'building_c': 'no label', 'addr_full': 'no label', 'access_roo': 'no label', 'religion': 'no label', 'name': 'inline label - always visible', 'denominati': 'no label', 'building': 'no label', 'amenity': 'no label', 'addr_stree': 'no label', 'addr_city': 'no label', 'type': 'no label', 'start': 'no label', 'luas (m2)': 'inline label - always visible', });
lyr_Bangunan300m_7.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'inline label - always visible', 'type': 'no label', 'luas (m2)': 'inline label - always visible', 'luas layan': 'inline label - always visible', 'persentase': 'inline label - visible with data', });
lyr_ServiceArea600m_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'wheelchair': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'name_etymo': 'no label', 'name_ety_1': 'no label', 'backup_gen': 'no label', 'capacity_p': 'no label', 'building_w': 'no label', 'building_s': 'no label', 'building_r': 'no label', 'building_l': 'no label', 'building_f': 'no label', 'building_c': 'no label', 'addr_full': 'no label', 'access_roo': 'no label', 'religion': 'no label', 'name': 'inline label - always visible', 'denominati': 'no label', 'building': 'no label', 'amenity': 'no label', 'addr_stree': 'no label', 'addr_city': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_ServiceArea300m_9.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'wheelchair': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'name_etymo': 'no label', 'name_ety_1': 'no label', 'backup_gen': 'no label', 'capacity_p': 'no label', 'building_w': 'no label', 'building_s': 'no label', 'building_r': 'no label', 'building_l': 'no label', 'building_f': 'no label', 'building_c': 'no label', 'addr_full': 'no label', 'access_roo': 'no label', 'religion': 'no label', 'name': 'inline label - always visible', 'denominati': 'no label', 'building': 'no label', 'amenity': 'no label', 'addr_stree': 'no label', 'addr_city': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_MajidBesarGubeng_10.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'wheelchair': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'name_etymo': 'no label', 'name_ety_1': 'no label', 'backup_gen': 'no label', 'capacity_p': 'no label', 'building_w': 'no label', 'building_s': 'no label', 'building_r': 'no label', 'building_l': 'no label', 'building_f': 'no label', 'building_c': 'no label', 'addr_full': 'no label', 'access_roo': 'no label', 'religion': 'no label', 'name': 'inline label - always visible', 'denominati': 'no label', 'building': 'no label', 'amenity': 'no label', 'addr_stree': 'no label', 'addr_city': 'no label', 'luas (m2)': 'inline label - always visible', });
lyr_MasjidBesarPoint_11.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'wheelchair': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'name_etymo': 'no label', 'name_ety_1': 'no label', 'backup_gen': 'no label', 'capacity_p': 'no label', 'building_w': 'no label', 'building_s': 'no label', 'building_r': 'no label', 'building_l': 'no label', 'building_f': 'no label', 'building_c': 'no label', 'addr_full': 'inline label - always visible', 'access_roo': 'no label', 'religion': 'inline label - always visible', 'name': 'inline label - always visible', 'denominati': 'no label', 'building': 'no label', 'amenity': 'no label', 'addr_stree': 'inline label - always visible', 'addr_city': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_MasjidBesarPoint_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
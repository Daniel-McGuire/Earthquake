Zepto(function($){

    var map = L.map('map').setView([51.505, -0.09], 13);

    function popUp(f,l){
        var out = [];
        if (f.properties){
            for(key in f.properties){
                out.push(key+": "+f.properties[key]);
            }
            l.bindPopup(out.join("<br />"));
        }
    }

    function geoData(data){
        var geojsonLayer = new L.GeoJSON.AJAX("http://www.corsproxy.com/earthquake.usgs.gov/earthquakes/feed/v1.0/summary/"+data+".geojson",{onEachFeature:popUp});
        return geojsonLayer;
    }
	
	function init(){
        var geojsonLayer = geoData("all_hour");

        var layerMap = L.tileLayer('http://{s}.tile.cloudmade.com/{key}/997/256/{z}/{x}/{y}.png', {
            key: "6798e89110614f5a9da04c5cd2918bf1",
            maxZoom: 20
        });

        geojsonLayer.addTo(map);
        layerMap.addTo(map);
	}

    function update(data){
        var geojsonLayer = geoData(data);

        var layerMap = L.tileLayer('http://{s}.tile.cloudmade.com/{key}/997/256/{z}/{x}/{y}.png', {
            key: "6798e89110614f5a9da04c5cd2918bf1",
            maxZoom: 20
        });

        geojsonLayer.addTo(map);
        layerMap.addTo(map);
    }

	init();

    //Past Hour
    $("#btn-sigEart-PastHour").on('click', function(){
        map.remove();
        map = L.map('map').setView([51.505, -0.09], 13);
        update("significant_hour");
    });

    $("#btn-M45-PastHour").on('click', function(){
        map.remove();
        map = L.map('map').setView([51.505, -0.09], 13);
        update("4.5_hour");
    });

    $("#btn-M25-PastHour").on('click', function(){
        map.remove();
        map = L.map('map').setView([51.505, -0.09], 13);
        update("4.5_hour");
    });

    $("#btn-M10-PastHour").on('click', function(){
        map.remove();
        map = L.map('map').setView([51.505, -0.09], 13);
        update("1.0_hour");
    });

    $("#btn-allEart-PastHour").on('click', function(){
        map.remove();
        map = L.map('map').setView([51.505, -0.09], 13);
        update("all_hour");
    });

    //Past Day
    $("#btn-sigEart-PastDay").on('click', function(){
        map.remove();
        map = L.map('map').setView([51.505, -0.09], 13);
        update("significant_day");
    });

    $("#btn-M45-PastDay").on('click', function(){
        map.remove();
        map = L.map('map').setView([51.505, -0.09], 13);
        update("4.5_day");
    });

    $("#btn-M25-PastDay").on('click', function(){
        map.remove();
        map = L.map('map').setView([51.505, -0.09], 13);
        update("4.5_day");
    });

    $("#btn-M10-PastDay").on('click', function(){
        map.remove();
        map = L.map('map').setView([51.505, -0.09], 13);
        update("1.0_day");
    });

    $("#btn-allEart-PastDay").on('click', function(){
        map.remove();
        map = L.map('map').setView([51.505, -0.09], 13);
        update("all_day");
    });

    //Past 7 Days
    $("#btn-sigEart-Past7Days").on('click', function(){
        map.remove();
        map = L.map('map').setView([51.505, -0.09], 13);
        update("significant_week");
    });

    $("#btn-M45-Past7Days").on('click', function(){
        map.remove();
        map = L.map('map').setView([51.505, -0.09], 13);
        update("4.5_week");
    });

    $("#btn-M25-Past7Days").on('click', function(){
        map.remove();
        map = L.map('map').setView([51.505, -0.09], 13);
        update("4.5_week");
    });

    $("#btn-M10-Past7Days").on('click', function(){
        map.remove();
        map = L.map('map').setView([51.505, -0.09], 13);
        update("1.0_week");
    });

    $("#btn-allEart-Past7Days").on('click', function(){
        map.remove();
        map = L.map('map').setView([51.505, -0.09], 13);
        update("all_week");
    });

    //Past 30 Days
    $("#btn-sigEart-Past30Days").on('click', function(){
        map.remove();
        map = L.map('map').setView([51.505, -0.09], 13);
        update("significant_month");
    });

    $("#btn-M45-Past30Days").on('click', function(){
        map.remove();
        map = L.map('map').setView([51.505, -0.09], 13);
        update("4.5_month");
    });

    $("#btn-M25-Past30Days").on('click', function(){
        map.remove();
        map = L.map('map').setView([51.505, -0.09], 13);
        update("4.5_month");
    });

    $("#btn-M10-Past30Days").on('click', function(){
        map.remove();
        map = L.map('map').setView([51.505, -0.09], 13);
        update("1.0_month");
    });

    $("#btn-allEart-Past30Days").on('click', function(){
        map.remove();
        map = L.map('map').setView([51.505, -0.09], 13);
        update("all_month");
    });

});
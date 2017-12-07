function initMap() {
    var center = {lat: 38.909087, lng: -77.042776};
    var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 13,
	center: center
    });
    var hotel = {lat: 38.924745, lng: -77.054829};
    var hotel_marker = new google.maps.Marker({
	position: hotel,
	map: map
    });
    var capitol = {lat: 38.890206, lng: -77.009040};
    var capitol_marker = new google.maps.Marker({
	position: capitol,
	map: map
    });
    var mall = {lat: 38.889631, lng: -77.022923};
    var mall_marker = new google.maps.Marker({
	position: mall,
	map: map
    });
    var gwu = {lat: 38.899879, lng: -77.047249};
    var gwu_marker = new google.maps.Marker({
	position: gwu,
	map: map
    }); 
    var air_space = {lat: 38.888419, lng: -77.019879};
    var air_space_marker = new google.maps.Marker({
	position: air_space,
	map: map
    });
    var philippines = {lat: 38.907729, lng: -77.038081};
    var philippines_marker = new google.maps.Marker({
	position: philippines,
	map: map
    });
    var world_food = {lat: 38.901691, lng: -77.040478};
    var world_food_marker = new google.maps.Marker({
	position: world_food,
	map: map
    });
    var wilson = {lat: 38.893734, lng: -77.030381};
    var wilson_marker = new google.maps.Marker({
	position: wilson,
	map: map
    });
}


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

function initPrgmMap() {
    var center = {lat: 38.909087, lng: -77.042776};
    var map = new google.maps.Map(document.getElementById('prgm-map'), {
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

  /*  hotel_marker.addListener('click', function() {
       map.setZoom(20);
       map.setCenter(hotel_marker.getPosition());
    });  */
}

function committeeLists() {
    var comm_group = document.getElementsByClassName('comm-group');
    var comms_txt = document.getElementsByClassName('comms-txt');
    var padding_top = [];

    for (var i = 0; i < comms_txt.length; i++) {
        var margin_bottom = comm_group[i].offsetHeight - comms_txt[i].offsetHeight;
        margin_bottom = margin_bottom.toString();
        margin_bottom /= 2;
        margin_bottom += 'px';
        comms_txt[i].style.height = "100%";
        comms_txt[i].style.paddingTop = margin_bottom;
        padding_top[i] = margin_bottom;
    }

    return padding_top;
}

function committeeDescriptionOver(list_items, curr, panel, desc) {

    panel.style.paddingTop = '0';
    list_items[curr].classList.add('current');
    list_items[curr].getElementsByTagName('h4')[0].style.display = 'none';
    desc.style.display = 'block';

    for(i = 0; i < list_items.length; i++) {
        if (list_items[i].className.indexOf('current') === -1) {
            list_items[i].style.display = 'none';
        }
    }
}

function committeeDescriptionOut(list_items, curr, panel, padding_init, desc) {

    panel.style.paddingTop = padding_init;
    list_items[curr].classList.remove('current');
    list_items[curr].getElementsByTagName('h4')[0].style.display = 'block';
    desc.style.display = 'none';

    for(i = 0; i < list_items.length; i++) {
        list_items[i].style.display = 'block';
    }
}

function addListeners(panel, panel_list, paddingT) {

    var list_items;
    var comm_descs;

    for(i = 0; i < panel_list.length; i++) {
        list_items = panel_list[i].children;
        comm_descs = panel_list[i].getElementsByClassName('comm-desc');

        for(j = 0; j < list_items.length; j++) {
            list_items[j].addEventListener('click', committeeDescriptionOver.bind(null, list_items, j, panel[i], comm_descs[j]));
            list_items[j].addEventListener('mouseleave', committeeDescriptionOut.bind(null, list_items, j, panel[i], paddingT[i], comm_descs[j]));
        }
    }
}

function chairBios() {

    var chair_bio = document.getElementsByClassName('chair-bio');
    var chair_pic = document.getElementsByClassName('chair-pic');

    for(i = 0; i < chair_pic.length; i++) {
        var margin_bottom = chair_pic[i].children[0].offsetHeight - chair_bio[i].children[0].offsetHeight;
        margin_bottom /= 2;
        margin_bottom += 'px';
        chair_bio[i].style.paddingTop = margin_bottom;
    }
}

function chairPics() {

    var chair_pic = document.getElementsByClassName('chair-pic');

    for(i = 0; i < chair_pic.length; i++) {
        var image = chair_pic[i].children[0];
        var paragraph = chair_pic[i].children[1];
        var margin = image.offsetWidth - paragraph.offsetWidth;
        margin /= 2;
        margin += 'px';
        paragraph.style.marginLeft = margin;
    }
}

function scheduleSize() {

    var rows = document.getElementsByTagName('tr');

    for(i = 0; i < rows.length; i++) {

        if (rows[i].children[0].tagName === 'TD') {
            var times = formatTimes(rows[i].children[0].innerHTML);
            var height = times[1] - times[0];
            height *= 100;
            height = height.toString();
            height += 'px';
            rows[i].style.height = height;
        }
    }
}

function formatTimes(time_frame) {

    var dash_index = time_frame.indexOf('-');
    var begin = time_frame.substr(0, dash_index - 1);
    var end = time_frame.substr(dash_index + 2, time_frame.length - 1);

    if(begin.includes('AM')) {
        begin = begin.substr(0, begin.indexOf(':'));
        begin = parseInt(begin);
    }
    else if (begin.includes('PM')) {

        begin = parseInt(begin.substr(0, begin.indexOf(':')));

        if (begin !== 12) {
            begin += 12;
        }
    }

    if(end.includes('AM')) {
        end = end.substr(0, end.indexOf(':'));
        end = parseInt(end);
    }
    else if (end.includes('PM')) {

        end = parseInt(end.substr(0, end.indexOf(':')));

        if (end !== 12) {
            end += 12;
        }
    }

    return [begin, end];
}

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

  /*  var contentString = '<div style="width: 100%; height: 100%; margin: 20px 0 20px 0; padding: 0;">' +
        '<p style="text-align: center; width: 100%; height: 100%; margin: 0; padding: 0;">Hotel</p>' +
        '</div>';

    var infoWindow = new google.maps.InfoWindow({
        content: contentString
    });

    hotel_marker.addListener('click', function() {
        infoWindow.open(map, hotel_marker);
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

function chairBios(bio, pic) {

    var chair_bio = document.getElementsByClassName(bio);
    var chair_pic = document.getElementsByClassName(pic);

    for(i = 0; i < chair_pic.length; i++) {
        var margin_bottom = chair_pic[i].children[0].offsetHeight - chair_bio[i].children[0].offsetHeight;
        margin_bottom /= 2;
        margin_bottom += 'px';
        chair_bio[i].style.paddingTop = margin_bottom;
    }
}

function chairPics(pic) {

    var chair_pic = document.getElementsByClassName(pic);

    for(i = 0; i < chair_pic.length; i++) {
        var image = chair_pic[i].children[0];
        var paragraph = chair_pic[i].children[1];
        var margin = image.offsetWidth - paragraph.offsetWidth;
        margin /= 2;
        margin += 'px';
        paragraph.style.paddingLeft = margin;
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
    var begin_half = false;
    var end_half = false;

    if (begin.charAt(begin.indexOf(':') + 1) === '3') {
        begin_half = true;
    }
    if (end.charAt(end.indexOf(':') + 1) === '3') {
        end_half = true;
    }

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

    if (begin_half) {
        begin += 0.5
    }
    if (end_half) {
        end += 0.5;
    }

    return [begin, end];
}

function formatTimesHeader(time, is_PM) {

    if (time > 12) {
        time -= 12;
        time = time.toString();
        time += ':00PM';
        is_PM = true;
    }
    else if (time === 12) {
        time = time.toString();
        time += ':00PM';
    }
    else if(time < 12 && is_PM) {
        time = time.toString();
        time += ':00PM';
    }
    else {
        time = time.toString();
        time += ':00AM';
    }

    return [time, is_PM];
}

function makeScheduleTable(startTime, endTime, day, schedule) {

    var events_table = document.getElementById(day.substr(0, day.indexOf(','))).children[1].children[0];
    var times_table = document.getElementById(day.substr(0, day.indexOf(','))).children[1].children[1];
    var time_frame = startTime + ' - ' + endTime;
    var formattedTimes = formatTimes(time_frame);
    var time_header = formattedTimes[1] - formattedTimes[0];
    var start_header = formattedTimes[0];

    // day header
 //   events_table.innerHTML += '<tr><th>' + day + '</th></tr>';

    // blank cell in upper left corner of table
    events_table.innerHTML += '<td></td>';
    times_table.innerHTML += '<tr class="times-header">';
    var times_header = document.getElementsByClassName('times-header');
    var is_PM = false;
    var time = start_header;

    // format initial time for header
    var formattedArray = formatTimesHeader(time, is_PM);
    time = formattedArray[0];
    is_PM = formattedArray[1];

    // construct header of times
    for(i = 0; i <= time_header; i++) {

        times_header[parseInt(day.charAt(day.length - 1)) - 1].innerHTML += '<td>' + time + '</td>';

        time = parseInt(time);
        time++;
        formattedArray = formatTimesHeader(time, is_PM);
        time = formattedArray[0];
        is_PM = formattedArray[1];
    }

    // close row of times
    times_header[parseInt(day.charAt(day.length - 1)) - 1].innerHTML += '</tr>';

    for(i = 0; i < schedule.length; i++) {

        events_table.innerHTML += '<tr id="' + i + day.substr(0, day.indexOf(',')) + '"><td class="schedule-event">' + schedule[i][1] + '</td></tr>';
        var timeArray = formatTimes(schedule[i][0]);
        var time_period = timeArray[1] - timeArray[0];
        var num_tds = timeArray[0] - start_header;

    //    times_table.innerHTML += '<tr><td colspan=""></td>';
    //    for (j = 0; j < Math.floor(num_tds); j++) {
    //        times_table.innerHTML += '<td></td>';
    //    }

        /*    if (timeArray[0].toString().includes('.') || timmeArray[1].toString().includes('.')) {
                times_table.innerHTML += '<td></td>';
            } */

        if (Math.floor(num_tds) === 0) {
            times_table.innerHTML += '<tr><td colspan="' + Math.ceil(time_period) + '" style="background-color: rgb(39,64,139);"></td></tr>';
        }
        else {
            times_table.innerHTML += '<tr><td colspan="' + Math.floor(num_tds) + '"></td><td colspan="' + Math.ceil(time_period) + '" style="background-color: rgb(39,64,139);"></td></tr>';
        }

    }

    /*
        current.innerHTML += '<td colspan="' + time_period +'" style="background-color: rgb(39,64,139);"></td></tr>';
    }   */
}

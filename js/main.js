function initMap() {
    var center = {lat: 38.924745, lng: -77.054829};
    var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 13,
	    center: center
    });

    var hotel = {lat: 38.924745, lng: -77.054829};
    var hotel_marker = new google.maps.Marker({
	    position: hotel,
	    map: map
    });
}

function initPrgmMap() {
    var center = {lat: 38.909087, lng: -77.042776};
    var map = new google.maps.Map(document.getElementById('prgm-map'), {
        zoom: 13,
        center: center
    });

    var contentString = '';
    var infoWindow = new google.maps.InfoWindow({
        content: contentString
    });

    var hotel = {lat: 38.924745, lng: -77.054829};
    var hotel_marker = new google.maps.Marker({
        position: hotel,
        map: map
    });
    hotel_marker.addListener('click', function() {
        contentString = '<div class="map-popup">Marriott Wardman Park Hotel</div>';
        setInfoContent(infoWindow, contentString);
        infoWindow.open(map, hotel_marker);
    });

    var gwu = {lat: 38.899879, lng: -77.047249};
    var gwu_marker = new google.maps.Marker({
        position: gwu,
        map: map
    });
    gwu_marker.addListener('click', function() {
        contentString = '<div class="map-popup">The George Washington University</div>';
        setInfoContent(infoWindow, contentString);
        infoWindow.open(map, gwu_marker);
    });

    var air_space = {lat: 38.888419, lng: -77.019879};
    var air_space_marker = new google.maps.Marker({
        position: air_space,
        map: map
    });
    air_space_marker.addListener('click', function() {
        contentString = '<div class="map-popup">National Air and Space Museum </div>';
        setInfoContent(infoWindow, contentString);
        infoWindow.open(map, air_space_marker);
    });

    // style popup Info Windows on map
    google.maps.event.addListener(infoWindow, 'domready', function() {
        var popupText = document.getElementsByClassName('map-popup')[0];
        popupText.style.color = '#000';
        popupText.style.paddingTop = '13px';
        popupText.style.paddingBottom = '10px';

        var iwOuter = $('.gm-style-iw');
        var iwBackground = iwOuter.prev();

        iwBackground.children(':nth-child(2)').css({'display' : 'none'});
        iwBackground.children(':nth-child(4)').css({'border-radius': '15px'});

        var iwCloseBtn = iwOuter.next();

        iwCloseBtn.css({'opacity': '1', 'top': '23px'});
    });
}

function setInfoContent(info, content) {
    info.setContent(content);
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

    var desc = document.getElementsByClassName('modal-desc-bio');

    for(i = 0; i < desc.length; i++) {
        var paragraphs = desc[i].children[0];
        var margin = desc[i].offsetHeight - paragraphs.offsetHeight;
        margin /= 2;
        margin = margin.toString() + 'px';
        desc[i].style.paddingTop = margin;
    }
}

function chairPics() {

    var desc = document.getElementsByClassName('modal-desc-pic');

    for(i = 0; i < desc.length; i++) {
        var image = desc[i].children[0];
        var info = desc[i].children[1];
        var margin = desc[i].offsetHeight - (image.offsetHeight + info.offsetHeight);
        margin /= 2;
        margin = margin.toString() + 'px';
        desc[i].style.paddingTop = margin;
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

    var events_table = document.getElementById(day.substr(0, day.indexOf(','))).children[1];
    var times_table = document.getElementById(day.substr(0, day.indexOf(','))).children[2];
    var time_frame = startTime + ' - ' + endTime;
    var formattedTimes = formatTimes(time_frame);
    var time_header = formattedTimes[1] - formattedTimes[0];
    var start_header = formattedTimes[0];

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

        times_header[parseInt(day.charAt(day.length - 1)) - 1].innerHTML += '<td>' + time + '</td><td></td>';

        time = parseInt(time);
        time++;
        formattedArray = formatTimesHeader(time, is_PM);
        time = formattedArray[0];
        is_PM = formattedArray[1];
    }

    // close row of times
    times_header[parseInt(day.charAt(day.length - 1)) - 1].innerHTML += '</tr>';


    for(i = 0; i < schedule.length; i++) {

        events_table.innerHTML += '<tr id="' + i + day.substr(0, day.indexOf(',')) + '"><td class="schedule-event">' + schedule[i][1] + '<br/>' + schedule[i][0] + '</td></tr>';
        var timeArray = formatTimes(schedule[i][0]);
        var time_period = (timeArray[1] - timeArray[0]) * 2;
        var num_tds = (timeArray[0] - start_header) * 2;

        if (num_tds === 0) {
            times_table.innerHTML += '<tr><td colspan="' + time_period + '" style="background-color: rgb(39,64,139);"></td></tr>';
        }
        else {
            times_table.innerHTML += '<tr><td colspan="' + num_tds + '"></td><td colspan="' + time_period + '" style="background-color: rgb(39,64,139);"></td></tr>';
        }
    }
}

function mobileSchedule(schedules) {
    var mobile = document.getElementsByClassName('mobile-schedule');
    var days = ['Thursday, March 1', 'Friday, March 2', 'Saturday, March 3', 'Sunday, March 4'];

    for(i = 0; i < days.length; i++) {
        mobile[i].innerHTML += '<tr><th colspan="2">' + days[i] + '</th></tr>';

        for (j = 0; j < schedules[i].length; j++) {
            mobile[i].innerHTML += '<tr><td>' + schedules[i][j][1] + '</td><td>' + schedules[i][j][0] + '</td></tr>';
        }
    }
}

function newsFeedHeight() {
    var sec_letter_height = document.getElementsByClassName('sec-gen-letter-container')[0].offsetHeight;
    sec_letter_height = sec_letter_height.toString();
    sec_letter_height += 'px';
    document.getElementById('news-feed-container').style.height = sec_letter_height;
    document.getElementById('news-feed-container').style.marginBottom = '60px';
}

// center page title within container on home page
function centerWelcome() {
    var vidContainer = document.getElementsByClassName('vid-container')[0];
    var welcomeBox = document.getElementsByClassName('welcome-box')[0];

    var marginSide = vidContainer.offsetWidth - welcomeBox.offsetWidth;
    marginSide /= 2;
    marginSide = marginSide.toString();
    marginSide += 'px';
    welcomeBox.style.marginLeft = marginSide;

    var marginTop = vidContainer.offsetHeight - welcomeBox.offsetHeight;
    marginTop /= 2;
    marginTop = marginTop.toString();
    marginTop += 'px';
    welcomeBox.style.marginTop = marginTop;
}

// center page title within container
function centerTitle() {
    var picContainer = document.getElementsByClassName('pic-container')[0];
    var pageTitle = document.getElementsByClassName('page-title')[0];

    var marginSide = picContainer.offsetWidth - pageTitle.offsetWidth;
    marginSide /= 2;
    marginSide = marginSide.toString();
    marginSide += 'px';
    pageTitle.style.marginLeft = marginSide;

    var marginTop;
    if ($('NAV').css('position') !== 'fixed') {
        marginTop = picContainer.offsetHeight - pageTitle.offsetHeight;
        marginTop /= 2;
        marginTop = marginTop.toString() + 'px';
        pageTitle.style.marginTop = marginTop;
    }
    else {
        marginTop = picContainer.offsetHeight - pageTitle.offsetHeight;
        marginTop += 160;
        marginTop /= 2;
        marginTop = marginTop.toString() + 'px';
        pageTitle.style.marginTop = marginTop;
    }
}

// centers social media icons in footer
function centerIcons() {
    var iconFooter = document.getElementsByClassName('social-media-icons')[0];
    var iconContainer = document.getElementsByClassName('icon-container')[0];

    var marginSide = iconFooter.offsetWidth - iconContainer.offsetWidth;
    marginSide /= 2;
    marginSide = marginSide.toString();
    marginSide += 'px';
    iconContainer.style.marginLeft = marginSide;

    var marginTop = iconFooter.offsetHeight - iconContainer.offsetHeight;
    marginTop /= 2;
    marginTop = marginTop.toString();
    marginTop += 'px';
    iconContainer.style.marginTop = marginTop;
}

function meetSecListeners() {
    var secDivs = document.getElementsByClassName('sec-details');
    var secInfo = document.getElementsByClassName('sec-info-brief');

    for(i = 0; i < secDivs.length; i++) {
        secDivs[i].addEventListener('mouseover', meetSec.bind(null, secDivs[i], secInfo[i]));
    }
}

// centers sec info within div and modal
function meetSec(secMem, secInfo) {
    var margin = secMem.offsetHeight - secInfo.offsetHeight;
    margin /= 2;
    margin = margin.toString() + 'px';
    secInfo.style.marginTop = margin;
}

function centerChairBio() {
    var pic = document.getElementsByClassName('chair-pic');
    var bio = document.getElementsByClassName('chair-bio');

    for(i = 0; i < pic.length; i++) {
        var bio_children = bio[i].children;
        for(j = 0; j < bio_children.length; j++) {
            var padding = pic[i].offsetHeight - bio[i].children[j].offsetHeight;
            padding /= 2;
            padding = padding.toString() + 'px';
            bio[i].style.paddingTop = padding;
        }
    }
}

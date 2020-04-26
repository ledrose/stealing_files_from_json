$("#openSB").click(function (e) { 
    e.preventDefault();
    $("#sidebar").css("margin-left", "0");
});

$("#closeSB").click(function (e) { 
    e.preventDefault();
    $("#sidebar").css("margin-left", "-250px");
});

// $(document).ready(function () {
    var WWidth=screen.width;
    console.log(WWidth);
    if (WWidth<=767) {
        $(".curDevice1").addClass("selected");
        $(".curDevice2").removeClass("selected");
        $(".curDevice3").removeClass("selected");
    }
    if (WWidth>767 && WWidth<1000) {
        $(".curDevice2").addClass("selected");
        $(".curDevice1").removeClass("selected");
        $(".curDevice3").removeClass("selected");
    }
    if (WWidth>=1000) {
        $(".curDevice3").addClass("selected");
        $(".curDevice2").removeClass("selected");
        $(".curDevice1").removeClass("selected");
    }
// });
var element1=document.querySelector('#el1');
var element2=document.querySelector('#el2');
var element3=document.querySelector('#el3');
var element4=document.querySelector('#el4');
var element5=document.querySelector('#el5');
//отправляем запрос
var requestURL = 'https://raw.githubusercontent.com/Alexandr767/Telebreeze/master/test.json';
var request = new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType='json';
request.send();

request.onload = function() {
    var recieved = request.response;
    fillSideBar(recieved);
}


function fillSideBar(list) {
    console.log(element1);
    element1.childNodes[3].innerText = list['menu'][0]['menu_title'];
    element1.childNodes[5].innerText = list['menu'][0]['menu_subtitle'];
    element2.childNodes[3].innerText = list['menu'][1]['menu_title'];
    element2.childNodes[5].innerText = list['menu'][1]['menu_subtitle'];
    element3.childNodes[3].innerText = list['menu'][2]['menu_title'];
    element3.childNodes[5].innerText = list['menu'][2]['menu_subtitle'];
    element4.childNodes[3].innerText = list['menu'][3]['menu_title'];
    element4.childNodes[5].innerText = list['menu'][3]['menu_subtitle'];
    element5.childNodes[3].innerText = list['menu'][4]['menu_title'];
    element5.childNodes[5].innerText = list['menu'][4]['menu_subtitle'];
}
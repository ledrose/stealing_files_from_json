var header = document.querySelector('header');
var section = document.querySelector('section');
//отправляем запрос
var requestURL = 'https://raw.githubusercontent.com/Alexandr767/Telebreeze/master/test.json';
var request = new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType='json';
request.send();

request.onload = function() {
    var superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}

function createTextObj(tag,content,ParentTag) {
    var obj=document.createElement(tag);
    obj.textContent= content;
    ParentTag.appendChild(obj);
}

function populateHeader(jsonObj) {
    var myH1= document.createElement('h1');
    myH1.textContent= jsonObj['squadName'];
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent ='Hometown:' +jsonObj['homeTown']+'//Formed:'+jsonObj['formed'];
    header.appendChild(myPara);
}

function showHeroes(jsonObj) {
    var heroes=jsonObj['members'];
    createTextObj('h1','Heroes',section);
        createTextObj('p','Name: '+heroes[0]['name'],section);
        createTextObj('p','Age: '+heroes[0]['age'],section);
        createTextObj('p','Secret Identity: '+heroes[0]['secretIdentity'],section);
        createTextObj('h3','Powers',section);
        var powers= document.createElement('ul');
        for (i=0;heroes[0]['powers'][i];i++) {
            createTextObj('li',heroes[0]['powers'][i],powers);
        }
        section.appendChild(powers);
}

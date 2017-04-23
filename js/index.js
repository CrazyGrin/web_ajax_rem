"use strict";
init_nav();

function init_nav() {
	ajax({
		url: '/tags',
		method: 'GET',
		returnData: '',
		callback: (res) => {
			var nav_list_added = document.querySelector('.nav_list_added');
			var nav_list_avaliable = document.querySelector('.nav_list_avaliable');
			var jsonObj = JSON.parse(res); //处理json
			var addedTagStr = '';
			var avaliableTagStr = '';
			var finalStr = '';
			for (var i = 0; i < jsonObj.added.length; i++) {
				addedTagStr = addedTagStr + "<li><a class='added_tag'>" + jsonObj.added[i].name + "</a></li>";
			}
			for (var j = 0; j < jsonObj.avaliable.length; j++) {
				avaliableTagStr = avaliableTagStr + "<li><a class='added_tag'>" + jsonObj.avaliable[j].name + "</a></li>";
			}
			nav_list_added.innerHTML = "<li id='nav_tittle'>切换条目</li>" + addedTagStr;
			nav_list_avaliable.innerHTML = "<li id='nav_tittle'>可添加栏目</li>" + avaliableTagStr;
			nav_button = document.querySelector('.nav_list_button');
		}
	});

	var nav_button = document.querySelector('.nav_list_button'),
		nav = document.querySelector('.nav'),
		nav_tittle = document.querySelector('#nav_tittle'),
		nav_change = 0;
	nav.style.setProperty('height', '1rem');
	nav_button.addEventListener('click', function() {
		if (nav_change == 0) {
			nav_tittle.style.setProperty('display', 'block');
			nav.style.setProperty('height', '');
			nav_change = 1;
		} else if (nav_change == 1) {
			nav.style.setProperty('height', '1rem');
			nav_tittle.style.setProperty('display', 'none');
			nav_change = 0;
		}
	});
};


function init_swing(){
	
}

var swing = document.querySelector('.swing');

swing.addEventListener('click', function() {
})
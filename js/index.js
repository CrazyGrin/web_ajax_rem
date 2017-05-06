"use strict";

var nav_button = document.querySelector('.nav_list_button'),
	nav = document.querySelector('.nav'),
	nav_tittle = document.querySelector('#nav_tittle'),
	nav_list_firstTag = document.querySelector('.nav_list_firstTag'),
	nav_change = 0;

nav.style.setProperty('height', '1rem');
nav_button.addEventListener('click', function() {
	if (nav_change == 0) {
		nav_button.style.setProperty('box-shadow', '0 -3px 1px 3px rgba(0,0,0,0)');
		nav_list_firstTag.style.setProperty('color', '#e6e6e6');
		nav.style.setProperty('height', '');
		nav_change = 1;
	} else if (nav_change == 1) {
		nav_button.style.setProperty('box-shadow', '0 -3px 1px 3px rgba(0,0,0,.1)');
		nav_list_firstTag.style.setProperty('color', '#e6e6e6');
		nav.style.setProperty('height', '1rem');
		nav_change = 0;
	}
});


(function init_nav() {
	ajax({
		url: '/tags',
		method: 'GET',
		callback: (res) => {
			var nav_list_added = document.querySelector('.nav_list_added'),
				nav_list_avaliable = document.querySelector('.nav_list_avaliable'),
				nav_list_firstTag = document.querySelector('.nav_list_firstTag');

			var jsonObj = JSON.parse(res),
				addedTagStr = '',
				avaliableTagStr = '',
				firstFourTag = '';

			for (var i = 0; i < 4; i++) {
				firstFourTag = firstFourTag + "<li><a class='first_tag'>" + jsonObj.added[i].name;
			}
			for (var i = 0; i < jsonObj.added.length; i++) {
				addedTagStr = addedTagStr + "<li><a class='added_tag'>" + jsonObj.added[i].name + "</a></li>";
			}
			for (var j = 0; j < jsonObj.avaliable.length; j++) {
				avaliableTagStr = avaliableTagStr + "<li><a class='added_tag'>" + jsonObj.avaliable[j].name + "</a></li>";
			}
			nav_list_firstTag.innerHTML = nav_list_firstTag.innerHTML + firstFourTag;
			nav_list_added.innerHTML = nav_list_added.innerHTML + "<li id='nav_tittle'>已有栏目</li>" + addedTagStr;
			nav_list_avaliable.innerHTML = "<li id='nav_tittle'>可添加栏目</li>" + avaliableTagStr;
			nav_button = document.querySelector('.nav_list_button');
		}
	});
})();

(function init_swing() {
	ajax({
		url: '/sliders',
		method: 'GET',
		callback: (res) => {
			var jsonObj = JSON.parse(res),
				swing_list = document.querySelector('.swing_list');

			swing_list.style.setProperty('width', jsonObj.length * 10 + "rem");
			for (var i = 0; i < jsonObj.length; i++) {
				swing_list.innerHTML = swing_list.innerHTML + "<li><img src='" + jsonObj[i].imgURL + "'></li>";
			}
		}
	});
})();

(function init_news() {
	ajax({
		url: '/new?num=5',
		method: 'GET',
		callback: (res) => {
			var jsonObj = JSON.parse(res),
				news_list = document.querySelector('.news_list'),
				heat_news = document.querySelector('.heat_news');

			var news = '';

			heat_news.innerHTML = "<span class='news_type' style='background-color : " + jsonObj[0].typeColor + "'>" + jsonObj[0].type + "</span>" + jsonObj[0].title;

			for (var i = 0; i < jsonObj.length; i++) {
				news_list.innerHTML = news_list.innerHTML 
				+ "<li><img src='" + jsonObj[i].imgURL + "'>" 
				+ "<p class='news_tittle'>" + jsonObj[i].title + "</p>" 
				+ "<p class='news_description'>" + jsonObj[i].description + "</p>" 
				+ "<p class='news_post'>" + jsonObj[i].post + "跟帖" 
				+ "<span class='news_type' style='background-color : " + jsonObj[i].typeColor + "'>" + jsonObj[i].type + "</span></p>" + "</li>";
			};
		}
	});
})();

// function init_swing() {

// }

// var swing = document.querySelector('.swing');

// swing.addEventListener('click', function() {})
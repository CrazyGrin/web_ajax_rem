var nav_button = document.querySelector('.nav_list_button'),
	nav = document.querySelector('.nav'),
	nav_tittle = document.querySelector('#nav_tittle'),
	nav_change = 0;



nav_button.addEventListener('click', function() {
	ajax({
		url: '/tags',
		method: 'GET',
		callback: function(res) {
			var ul_nav = document.querySelector('.nav_list');

			var jsonObj = JSON.parse(res); //处理json

			var addedTagStr = '';
			for (var i = 0; i < jsonObj.added.length; i++) {
				addedTagStr = addedTagStr + "<li><a class='added_tag'>" + jsonObj.added[i].name + "</a></li>";
			}
			var not_addedTagStr = '';
			for (var i = 0; i < jsonObj.avaliable.length; i++) {
				not_addedTagStr = not_addedTagStr + "<li><a class='added_tag'>" + jsonObj.avaliable[i].name + "</a></li>";
			}
			ul_nav.innerHTML = ul_nav.innerHTML + addedTagStr;
		}
	});
	if (nav_change == 0) {
		nav_change = 1;
		nav_tittle.style.setProperty('display', 'block');
	} else if (nav_change == 1) {
		nav_change = 0;
		nav.style.setProperty('height', '1rem');
		nav_tittle.style.setProperty('display', 'none');
	}
});
function ajax(obj) {
	var xml = new XMLHttpRequest();

	if (obj.method === 'GET') {
		xml.open(obj.method, obj.url, true);
		xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xml.send(null);
	} else if (obj.method === 'post') {
		xml.open(obj.method, obj.url, true);
		xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xml.send(JSON.stringify(obj.data));
	} else {
		console.log('不存在的方法:' + obj.method);
		return false;
	}

	xml.onreadystatechange = function() {
		if (xml.readyState === 4 && xml.status === 200) {
			return obj.callback(xml.responseText);
		}
	}
}
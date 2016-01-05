var getIEVersion = (function(){
	
	var _v = undefined
			,isInit = false;

	return function() {
		if(isInit){
			return _v;
		}else{
			var v = 3,
			    div = document.createElement('div'),
			    all = div.getElementsByTagName('i');
			while (
			    div.innerHTML = '<!--[if gt ie ' + (++v) + ']><i></i><![endif]-->',
			    all[0]
			);
			isInit = true;
			return _v = (v > 4 ? v : false);
		}
	}

})();



function getIEVersion() {
	var v = 3,
	    div = document.createElement('div'),
	    all = div.getElementsByTagName('i');
	while (
	    div.innerHTML = '<!--[if gt ie ' + (++v) + ']><i></i><![endif]-->',
	    all[0]
	);
	v = v > 4 ? v : false;
	
	this.getIEVersion = function(){return v}

	return v;
}


var _IEVersion = (function(){
	var v = 3,
	    div = document.createElement('div'),
	    all = div.getElementsByTagName('i');
	while (
	    div.innerHTML = '<!--[if gt ie ' + (++v) + ']><i></i><![endif]-->',
	    all[0]
	);
	v = v > 4 ? v : false;
	
	return v;
})();
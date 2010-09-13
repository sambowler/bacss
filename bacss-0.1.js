function createStyleEl() {
	var head =  document.getElementsByTagName('head');
	head = head[0];
	var cssEl = document.createElement('link');
	cssEl.rel = "stylesheet";
	cssEl.href = "http://github.com/sambowler/bacss/raw/master/latest.css"
	cssEl.media = "screen";
	head.appendChild(cssEl);
}

function Bacss(options) {
	var head = document.getElementsByTagName('head');
	head = head[0];
	var ie7js = document.createElement('script');
	ie7js.src = "http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js";
	head.appendChild(ie7js);
	var html5shiv = document.createElement('script');
	html5shiv.src = "http://html5shiv.googlecode.com/svn/trunk/html5.js";
	head.appendChild(html5shiv);
	if(options) {
		for (var key in options) {
			var val = options[key];
			split = bacss.split(key)
			bacss = split[0] + val + split[1];
		}
		createStyleEl();
	} else {
		createStyleEl();
	}
};

scripts = document.getElementsByTagName('script');
for(var i = 0; i < scripts.length; i++) {
	var src = scripts[i].src;
	if(src.match(/bacss/)) {
		src = src.split('?');
		src[1] == "autorun" ? new Bacss() : false;
	}
}
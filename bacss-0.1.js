// Creates a link element to the latest version of BaCSS
function createLinkEl() {
	head =  document.getElementsByTagName('head');
	head = head[0];
	linkEl = document.createElement('link');
	linkEl.rel = "stylesheet";
	linkEl.href = "http://github.com/sambowler/bacss/raw/master/latest.css";
	linkEl.media = "screen";
	head.appendChild(linkEl);
}

// Checks whether IE < 9 is in use
function is_lt_ie9() {
	ie_v = parseFloat(navigator.userAgent.match(/MSIE (\d+\.\d+);/));
	if(ie_v && ie_v[1] < 9) { return true; } else { return false; };
}

function Bacss() {
	if(is_lt_ie9()) { // If the user is using less than IE9, we need to get the browser to support some features the CSS uses (and support HTML5 elements)
		head = document.getElementsByTagName('head');
		head = head[0];
		ie7js = document.createElement('script');
		ie7js.src = "http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js";
		head.appendChild(ie7js);
	}
	createLinkEl();
};

new Bacss();
var bacss = 'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,font,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td{border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;margin:0;padding:0;}:focus{outline:0;}body{line-height:1;color:#000;width:1080px;font:14px/21px "Helvetica Neue", Helvetica, Arial, sans-serif;background:#FFF;padding-top:2em;margin:0 auto 40px;}ol,ul{list-style:none;}table{font-size:inherit;font:100%;border-collapse:collapse;border-spacing:0;margin:0 0 1.5em;padding:0;}caption,th,td{text-align:left;font-weight:400;}blockquote:before,blockquote:after,q:before,q:after{content:"";}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}html{overflow-y:scroll;-webkit-font-smoothing:anti-aliased;}select,input,textarea,button{font:99% sans-serif;}body,select,input,textarea{color:#444;}h1,h2,h3,h4,h5,h6{font-weight:700;color:#333;margin:1em 0 .5em;}h1{font-size:2em;}h2{font-size:1.75em;}h3{font-size:1.6em;}h4{font-size:1.4em;}h5{font-size:1.25em;}h6{font-size:1.1em;}i,em{font-style:italic;}a:hover,a:active{background:#000;color:#FFF;outline:none;}a:link{-webkit-tap-highlight-color:#FF5E99;}small{font-size:85%;}sub{vertical-align:sub;font-size:smaller;}sup{vertical-align:super;font-size:smaller;}p{margin-bottom:.8em;color:#444;}.error,.success{font-weight:700;padding:.5em;}.error{background:#FEE;border:1px solid red;}.success{background:#EFE;border:1px solid #0F0;}pre,code,kbd,samp{font:12px Monaco, Inconsolata, "Courier New", Courier, monospace;}pre{white-space:pre-line;word-wrap:break-word;padding:15px;}input[type="radio"]{vertical-align:text-bottom;}input[type="checkbox"]{vertical-align:bottom;}label,input[type=button],input[type=submit],button{cursor:pointer;}input:invalid{border-radius:1px;-moz-box-shadow:0 0 5px red;-webkit-box-shadow:0 0 5px red;box-shadow:0 0 5px red;}ul{list-style-type:disc;margin:0 0 .8em 2.5em;}ol{list-style-type:decimal;margin:0 0 .8em 2.5em;}blockquote{font-style:italic;background:#F4F5F1;margin:.8em 0;padding:10px;}blockquote p{margin-bottom:0;}code,kbd,samp{background:rgba(0,0,0,0.15);}dd{margin-bottom:1em;font-size:13px;}fieldset{border:1px solid #b6bca2;margin-bottom:.8em;padding:1em;}legend{padding:0 .5em;}input[type="text"],textarea{border:1px solid #909090;padding:.5em;}textarea{resize:x;-moz-resize:x;}caption{font-style:italic;text-align:left;}tr.alt td{background:#eee;}td{border:1px solid #909090;vertical-align:middle;padding:.333em;}th{font-weight:700;vertical-align:middle;padding:.333em;}body > *{margin:0 .625%;}body > div{float:left;display:block;}header{margin-bottom:1.5em;}header ul{list-style-type:none;overflow:hidden;margin:0;padding:0;}header ul li{float:left;}nav li a,header ul li a{display:block;margin-right:.5em;}body > section,body > article{width:67.5%;float:left;}body > aside{width:30%;float:left;}footer{clear:both;width:98.75%;}b,strong,th,dt{font-weight:700;}dl,form{background:#F4F5F1;padding:10px;}';

function createStyleEl(css) {
	var head =  document.getElementsByTagName('head');
	head = head[0];
	var cssEl = document.createElement('style');
	cssEl.type = "text/css";
	cssEl.innerHTML = css;
	head.appendChild(cssEl);
}

function Bacss(options) {
	if(options) {
		for (var key in options) {
			var val = options[key];
			split = bacss.split(key)
			bacss = split[0] + val + split[1];
		}
		createStyleEl(bacss);
	} else {
		createStyleEl(bacss);
	}
}
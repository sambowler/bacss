bacss = 'html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video{background:transparent;border:0;font-size:100%;outline:0;vertical-align:baseline;margin:0;padding:0;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}html{-webkit-font-smoothing:anti-aliased;overflow-y:scroll;}table{font-size:inherit;font:100%;border-collapse:collapse;border-spacing:0;margin:0 0 1.5em;padding:0;}body,select,input,textarea{color:#444;}body{background:#FFF;font:15px/24px Cambria, Georgia, "Times New Roman", Times, serif;width:1080px;margin:0 auto 40px;}h1,h2,h3,h4,h5,h6{color:#333;font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:700;margin:1em 0 .5em;}h1{font-size:2em;}#main h1,#primary-content h1,body > section h1,body > article h1,h2{font-size:1.75em;}h3{font-size:1.6em;}h4{font-size:1.4em;}h5{font-size:1.25em;}h6{font-size:1.1em;}p{color:#444;margin-bottom:.8em;}pre{background:#F4F5F1;border:1px solid #E4E7DD;margin-bottom:.8em;white-space:pre;word-wrap:break-word;padding:15px;}ul{list-style-type:disc;margin:0 0 .8em 2.5em;}ol{list-style-type:decimal;margin:0 0 .8em 2.5em;}blockquote{background:#F4F5F1;border:1px solid #E4E7DD;font-style:italic;margin:.8em 0;padding:10px;}blockquote p{margin-bottom:0;}dl{background:#F4F5F1;padding:10px;}hr{background:0 color-stop(0.25,rgb(187,187,187)), color-stop(0.75,rgb(187,187,187)), color-stop(1,rgb(255,255,255)));border:0;height:1px;}i,em{font-style:italic;}a{color:#000;}a:hover,a:active{background:#000;color:#FFF;outline:none;text-decoration:none;}a:link{-webkit-tap-highlight-color:#FF5E99;}small{font-size:85%;}sub{font-size:smaller;vertical-align:sub;}sup{font-size:smaller;vertical-align:super;}cite{color:#666;font-size:13px;font-style:normal;font-weight:400;}pre,code,kbd,samp,tt,var{font:12px Monaco, Inconsolata, "Courier New", Courier, monospace;}code,kbd,samp,tt,var{background:rgba(0,0,0,0.15);}dd{font-size:13px;margin-bottom:1em;}abbr,acronym{border-bottom:1px dotted #999;cursor:help;}form{background:#F4F5F1;border:1px solid #E4E7DD;padding:10px;}fieldset{border:1px solid #b1b4a9;margin-bottom:.8em;padding:1em;}legend{font-weight:700;margin-left:-.5em;padding:0 .5em;}select,input,textarea,button{font:99% sans-serif;}input[type="text"],textarea{border:1px solid #b1b4a9;padding:.5em;}select[size],textarea,input[type="radio"]{vertical-align:middle;}input[type="checkbox"]{vertical-align:bottom;}textarea{-moz-resize:x;resize:x;}label,input[type=button],input[type=submit],button{cursor:pointer;}input:invalid{-moz-box-shadow:0 0 5px red;-webkit-box-shadow:0 0 5px red;border-radius:1px;box-shadow:0 0 5px red;}caption{font-style:italic;text-align:left;}tr.alt td{background:#eee;}td{border:1px solid #909090;vertical-align:middle;padding:.333em;}th{font-weight:700;vertical-align:middle;padding:.333em;}body > *{display:block;float:left;margin:0 .625%;}header,#header{background:#0B0A0E;color:#FFF;width:100%;margin:0 -.625em 1.5em;padding:2em 1em 0;}header ul,#header ul,footer ul,#footer ul{list-style-type:none;overflow:hidden;margin:0;padding:0;}header ul li,#header ul li,footer ul li,#footer ul li{float:left;}nav li a,header li a,#header li a{background:#333;color:#FFF;display:block;margin-right:1px;text-decoration:none;padding:.25em 1.5em .3em;}nav li a:hover,header li a:hover,#header li a:hover{background:#444;}body > section,body > article,#main,#primary-content{float:left;width:67.5%;}body > section img,body > article img,#main img,#primary-content img{border:5px solid #EEE;float:left;margin:0 1em 1em 0;}body > aside,#sidebar,#secondary-content{float:left;width:30%;}footer,#footer{background:#0B0A0E;clear:both;color:#FFF;width:98.75%;margin:1.5em -.625em 0;padding:0 1em 1em;}footer ul,#footer ul{margin-bottom:.8em;}.error,.success{font-weight:700;padding:.25em .5em;}.error{background:#FEE;border:1px solid #C98F8F;color:#543434;}.success{background:#EFE;border:1px solid #8FC98F;color:#1C301C;}.left{float:left!important;}img.left{margin:0 1em 1em 0;}.right{float:right!important;}img.right{margin:0 0 1em 1em !important;}.clear{clear:both;}.clearfix{overflow:hidden;zoom:1;}b,strong,th,dt{font-weight:700;}header *,#header *,footer *,#footer *{color:#FFF!important;}body > section :first-child,body > article :first-child,#main :first-child,#primary-content :first-child,body > aside :first-child,#sidebar :first-child,#secondary-content :first-child{margin-top:0!important;}';

function createStyleEl(css) {
	console.log(typeof css);
	var head =  document.getElementsByTagName('head');
	head = head[0];
	var cssEl = document.createElement('style');
	cssEl.type = "text/css";
	cssEl.innerHTML = css; // Doesn't work in IE8 (style elements are read-only)
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
		createStyleEl(bacss);
	} else {
		createStyleEl(bacss);
	}
};
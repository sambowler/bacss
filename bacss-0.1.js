var bacss = 'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,font,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td{border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;margin:0;padding:0;}:focus{outline:0;}body{line-height:1;width:1080px;font:14px/21px "Helvetica Neue", Helvetica, Arial, sans-serif;background:#FFF;padding-top:2em;color:#112D3A;margin:auto;}ol,ul{list-style:none;}table{border-collapse:separate;border-spacing:0;}caption,th,td{text-align:left;font-weight:400;}blockquote:before,blockquote:after,q:before,q:after{content:"";}h1,h2,h3,h4,h5,h6{font-weight:700;color:#333;text-shadow:0 -1px 0 #FFF;margin:1em 0 .5em;}h1{font-size:2em;}h2{font-size:1.75em;}h3{font-size:1.6em;}h4{font-size:1.4em;}h5{font-size:1.25em;}h6{font-size:1.1em;}a:hover,a:focus{background:#333;color:#FFF;}p{margin-bottom:.8em;color:#444;}blockquote{font-style:italic;background:#F4F5F1;margin:.8em 0;padding:10px 0 10px 10px;}blockquote p{margin-bottom:0;}code{background:#DAD8C3;margin:0 -.1em;padding:0 .1em;}body > div{float:left;display:block;margin:0 .625%;}header{width:98.75%;margin:0 10px;background:green;}nav{list-style-type:none;padding:0;}nav li{float:left;}nav li a{display:block;padding:.25em .5em;}body > section,body > article{width:67.5%;}body > aside{width:30%;}footer{width:98.75%;}';

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

// Minified:
function createStyleEl(css){var head=document.getElementsByTagName('head');head=head[0];var cssEl=document.createElement('style');cssEl.type="text/css";cssEl.innerHTML=css;head.appendChild(cssEl);}
function Bacss(options){if(options){for(var key in options){var val=options[key];split=bacss.split(key)
bacss=split[0]+val+split[1];}
createStyleEl(bacss);}else{createStyleEl(bacss);}}
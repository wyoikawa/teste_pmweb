var cssId = 'myCss';
if (!document.getElementById(cssId)) {
	var head  = document.getElementsByTagName('head')[0];
	var link  = document.createElement('link');
	link.id   = cssId;
	link.rel  = 'stylesheet';
	link.type = 'text/css';
	link.href = 'https://raw.githubusercontent.com/wyoikawa/teste_pmweb/master/prod/css/styles.min.css';
	link.media = 'all';
	head.appendChild(link);
}
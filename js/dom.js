var dom = (function(dom){

dom.findByClass = (className) =>{
	return document.getElementsByClassName(className);
}

dom.find = (selector) => {
	return document.querySelectorAll(selector);	
};

return dom;

})(dom || {});
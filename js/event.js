var events = (function(events) { 

	events.register = (node,eventName,fn) => {
		console.log(node);
		if(window.addEventListener) {
			//console.log(fn);
			node.addEventListener(eventName,fn);
		} else {
			node.attachEvent(eventName,fn);
		}
	};

	return events;	

})(events || {});
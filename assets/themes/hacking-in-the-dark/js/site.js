YUI().use('anim', function (Y) {
    function findPos(node) {
	var point = [,];
	var curleft = curtop = 0;
	if (node.get('offsetParent')) {
	    do {
		curleft += node.get('offsetLeft');
		curtop += node.get('offsetTop');
	    } while (node = node.get('offsetParent'));
	    point = [curleft,curtop];
	}
	return point;
    }

    function slideRToLAnim(selector, xDist, duration) {
	var node = Y.one(selector);
	var pos = findPos(node);
	var animPos = findPos(node);
	animPos[0] = animPos[0] + xDist;
	var anim = new Y.Anim({
		node: node,
		from: { xy: animPos },
		to: { xy: pos },
		duration: duration
	    });
	return anim;
    }

    function slideLToRAnim(selector, xDist, duration) {
	var node = Y.one(selector);
	var pos = findPos(node);
	var animPos = findPos(node);
	animPos[0] = animPos[0] - xDist;
	var anim = new Y.Anim({
		node: node,
		from: { xy: animPos },
		to: { xy: pos },
		duration: duration
	    });
	return anim;
    }

    slideRToLAnim('.content-title', 500, 0.5).run();
    //slideLToRAnim('.page-content', 500, 0.5).run();

    /*
    // It's pretty futile to try to run any animations on page unload
    // Since it just goes away from the page
    // An alert could go up, but that's about it

    var onUnload = function(e) {
    }
    Y.on('unload', onUnload, '#body');
    */

});

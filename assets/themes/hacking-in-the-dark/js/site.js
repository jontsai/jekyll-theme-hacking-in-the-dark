YUI().use('anim', function (Y) {

    function animSlideX(selector, direction, xDist, duration) {
	var node = Y.one(selector);
	var dir = direction == 'ltr' ? -1 : 1; // default right-to-left
	var pos = node.getXY();
	var animPos = [pos[0] + xDist * dir, pos[1]];
	var anim = new Y.Anim({
		node: node,
		from: { xy: animPos },
		to: { xy: pos },
		duration: duration
	    });
	return anim;
    }

    // Disabling Title animation because node.getXY() does not behave consistently
    //var contentTitleSelector = '#content_title'
    //Y.on('contentready', function (e) { animSlideX(contentTitleSelector, 'rtl', 500, 0.5).run(); }, contentTitleSelector);

    /*
    // It's pretty futile to try to run any animations on page unload
    // Since it just goes away from the page
    // An alert could go up, but that's about it

    var onUnload = function(e) {
    }
    Y.on('unload', onUnload, '#body');
    */

});

/**
 * relativeTime
 * accepts a tweet timestamp and produces relational time text
 */ 
function relativeTime (c) {
    var origStamp = Date.parse( c ),
    curDate = new Date(),
    currentStamp = curDate.getTime(),
    difference = parseInt( ( currentStamp - origStamp ) / 1000, 10 ),
    dateArr = c.toString().split(' ');

    var relTime = '';
    // if no difference, do nothing
    if ( difference < 0 ) {
        return false;
    } else if ( difference <= 5 ) {
        relTime = "Just now";
    } else if ( difference <= 20 ) {
        relTime = "Seconds ago";
    } else if ( difference <= 60 ) {
        relTime = "A minute ago";
    } else if ( difference < 3600 ) {
        relTime = parseInt( difference / 60, 10 ) + ' minutes ago';
    } else if (difference <= 1.5 * 3600) {
        relTime = "One hour ago";
    } else if ( difference < 23.5 * 3600 ) {
        relTime = Math.round( difference / 3600 ) + ' hours ago';
    } else if (difference < 1.5*24*3600) {
        relTime = "One day ago";
    } else {
        // produce date stamp for tweets older than a day
        var time = dateArr[3].replace( /\:\d+$/,'' );
        var year = ( ( dateArr[5] !== curDate.getFullYear().toString() ) ? ' ' + dateArr[5] : ''); 
        var day = dateArr[2];
        var month = dateArr[1];
        relTime = month + ' ' + day;
    }
    if (relTime) {
        relTime = '(Shared ' + relTime + ')';
    }
    return relTime;
    
};
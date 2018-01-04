if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/gallery-inview-event/gallery-inview-event.js']) {
   __coverage__['build/gallery-inview-event/gallery-inview-event.js'] = {"path":"build/gallery-inview-event/gallery-inview-event.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":32},"end":{"line":1,"column":51}}},"2":{"name":"(anonymous_2)","line":28,"loc":{"start":{"line":28,"column":15},"end":{"line":28,"column":29}}},"3":{"name":"(anonymous_3)","line":44,"loc":{"start":{"line":44,"column":18},"end":{"line":44,"column":29}}},"4":{"name":"(anonymous_4)","line":58,"loc":{"start":{"line":58,"column":19},"end":{"line":58,"column":36}}},"5":{"name":"(anonymous_5)","line":78,"loc":{"start":{"line":78,"column":26},"end":{"line":78,"column":37}}},"6":{"name":"(anonymous_6)","line":91,"loc":{"start":{"line":91,"column":19},"end":{"line":91,"column":30}}},"7":{"name":"(anonymous_7)","line":93,"loc":{"start":{"line":93,"column":23},"end":{"line":93,"column":34}}},"8":{"name":"(anonymous_8)","line":101,"loc":{"start":{"line":101,"column":8},"end":{"line":101,"column":38}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":114,"column":49}},"2":{"start":{"line":21,"column":0},"end":{"line":99,"column":22}},"3":{"start":{"line":29,"column":8},"end":{"line":29,"column":18}},"4":{"start":{"line":30,"column":8},"end":{"line":33,"column":9}},"5":{"start":{"line":31,"column":12},"end":{"line":31,"column":62}},"6":{"start":{"line":32,"column":12},"end":{"line":32,"column":35}},"7":{"start":{"line":34,"column":8},"end":{"line":34,"column":31}},"8":{"start":{"line":35,"column":8},"end":{"line":35,"column":17}},"9":{"start":{"line":45,"column":8},"end":{"line":45,"column":24}},"10":{"start":{"line":46,"column":8},"end":{"line":50,"column":9}},"11":{"start":{"line":47,"column":12},"end":{"line":47,"column":62}},"12":{"start":{"line":49,"column":12},"end":{"line":49,"column":26}},"13":{"start":{"line":59,"column":8},"end":{"line":61,"column":17}},"14":{"start":{"line":62,"column":8},"end":{"line":70,"column":9}},"15":{"start":{"line":63,"column":12},"end":{"line":63,"column":42}},"16":{"start":{"line":64,"column":12},"end":{"line":69,"column":13}},"17":{"start":{"line":65,"column":16},"end":{"line":65,"column":54}},"18":{"start":{"line":67,"column":16},"end":{"line":67,"column":52}},"19":{"start":{"line":68,"column":16},"end":{"line":68,"column":64}},"20":{"start":{"line":71,"column":8},"end":{"line":71,"column":49}},"21":{"start":{"line":79,"column":8},"end":{"line":83,"column":9}},"22":{"start":{"line":80,"column":12},"end":{"line":80,"column":65}},"23":{"start":{"line":82,"column":12},"end":{"line":82,"column":24}},"24":{"start":{"line":92,"column":8},"end":{"line":92,"column":24}},"25":{"start":{"line":93,"column":8},"end":{"line":96,"column":11}},"26":{"start":{"line":94,"column":12},"end":{"line":94,"column":43}},"27":{"start":{"line":95,"column":12},"end":{"line":95,"column":37}},"28":{"start":{"line":100,"column":0},"end":{"line":112,"column":3}},"29":{"start":{"line":102,"column":8},"end":{"line":104,"column":9}},"30":{"start":{"line":103,"column":12},"end":{"line":103,"column":30}},"31":{"start":{"line":105,"column":8},"end":{"line":109,"column":11}},"32":{"start":{"line":110,"column":8},"end":{"line":110,"column":50}}},"branchMap":{"1":{"line":64,"type":"if","locations":[{"start":{"line":64,"column":12},"end":{"line":64,"column":12}},{"start":{"line":64,"column":12},"end":{"line":64,"column":12}}]},"2":{"line":80,"type":"binary-expr","locations":[{"start":{"line":80,"column":19},"end":{"line":80,"column":56}},{"start":{"line":80,"column":60},"end":{"line":80,"column":64}}]},"3":{"line":102,"type":"if","locations":[{"start":{"line":102,"column":8},"end":{"line":102,"column":8}},{"start":{"line":102,"column":8},"end":{"line":102,"column":8}}]}},"code":["(function () { YUI.add('gallery-inview-event', function (Y, NAME) {","","/*jslint plusplus: true, white: true */","/**","Adds a synthetic `inview` event that fires when the node is scrolled into view."," ","Usage:"," ","    YUI().use('gallery-inview-event',function (Y) {","            Y.one('#mynode').on('inview',function(){","                Y.one('#mynode').setContent('this node is now in view');","            });","    });","@module gallery-inview-event","**/","/**","Provides the implementation for the synthetic `inview` event.","@class InViewEvent","@static","*/","var InViewEvent = {","    /**","     * My method description.","     * @method _getTop","     * @param {HTMLElement} node which top is to be found from browser x and y;","     * @return {Boolean} y position of node from 0,0 for body;","     */","    '_getTop': function(elm) {","        var y = 0;","        while ( !! elm) {","            y = parseInt(y, 10) + parseInt(elm.offsetTop, 10);","            elm = elm.offsetParent;","        }","        console.log('--->', y);","        return y;","    },","    '_attachedNode': [],","    '_isInitialized': false,","    /**","     * return current scrollY + documentHeight","     * @method _getScroll","     * @return {Number} scrollY + documentHeight","     */","    '_getScroll': function() {","        var that = this;","        try {","            return window.scrollY + that._getViewPortHeight();","        } catch (e) {","            return 100000;","        }","    },","    /**","     * checks current scroll position and fires inview event","     * @method _fireInView","     * @param {Number} current scroll position","     * @return {Undefined}","     */","    '_fireInView': function(scroll) {","        var that = this,","            newAttachedNodeList = [],","            t, i;","        for (i = 0; i < that._attachedNode.length; i++) {","            t = that._attachedNode[i].top;","            if (t < scroll) {","                that._attachedNode[i].notifier.fire();","            } else {","                console.log('not fired', t, scroll);","                newAttachedNodeList.push(that._attachedNode[i]);","            }","        }","        that._attachedNode = newAttachedNodeList;","    },","    /**","     * return ViewPortHeight","     * @method _getViewPortHeight","     * @return {Number} viewPort Height","     */","    '_getViewPortHeight': function() {","        try {","            return document.documentElement.clientHeight || 1200;","        } catch (e) {","            return 1200;","        }","    },","    /**","     * hooks scroll event on body to check if nodes are in view","     * @method _initialize","     *","     * @return {undefine}","     */","    '_initialize': function() {","        var that = this;","        Y.on('scroll', function() {","            var scroll = that._getScroll();","            that._fireInView(scroll);","        });","    }","},","    ive = InViewEvent;","Y.Event.define(\"inview\", {","    on: function(node, sub, notifier) {","        if (!ive._isInitialized) {","            ive._initialize();","        }","        ive._attachedNode.push({","            \"node\": node,","            \"top\": ive._getTop(node._node),","            \"notifier\": notifier","        });","        ive._fireInView(ive._getViewPortHeight());","    }","});","","}, '@VERSION@', {\"requires\": [\"node\", \"event\"]});","","}());"]};
}
var __cov_aPVpJbEiQCvHOdKI3l0$CA = __coverage__['build/gallery-inview-event/gallery-inview-event.js'];
__cov_aPVpJbEiQCvHOdKI3l0$CA.s['1']++;YUI.add('gallery-inview-event',function(Y,NAME){__cov_aPVpJbEiQCvHOdKI3l0$CA.f['1']++;__cov_aPVpJbEiQCvHOdKI3l0$CA.s['2']++;var InViewEvent={'_getTop':function(elm){__cov_aPVpJbEiQCvHOdKI3l0$CA.f['2']++;__cov_aPVpJbEiQCvHOdKI3l0$CA.s['3']++;var y=0;__cov_aPVpJbEiQCvHOdKI3l0$CA.s['4']++;while(!!elm){__cov_aPVpJbEiQCvHOdKI3l0$CA.s['5']++;y=parseInt(y,10)+parseInt(elm.offsetTop,10);__cov_aPVpJbEiQCvHOdKI3l0$CA.s['6']++;elm=elm.offsetParent;}__cov_aPVpJbEiQCvHOdKI3l0$CA.s['7']++;console.log('--->',y);__cov_aPVpJbEiQCvHOdKI3l0$CA.s['8']++;return y;},'_attachedNode':[],'_isInitialized':false,'_getScroll':function(){__cov_aPVpJbEiQCvHOdKI3l0$CA.f['3']++;__cov_aPVpJbEiQCvHOdKI3l0$CA.s['9']++;var that=this;__cov_aPVpJbEiQCvHOdKI3l0$CA.s['10']++;try{__cov_aPVpJbEiQCvHOdKI3l0$CA.s['11']++;return window.scrollY+that._getViewPortHeight();}catch(e){__cov_aPVpJbEiQCvHOdKI3l0$CA.s['12']++;return 100000;}},'_fireInView':function(scroll){__cov_aPVpJbEiQCvHOdKI3l0$CA.f['4']++;__cov_aPVpJbEiQCvHOdKI3l0$CA.s['13']++;var that=this,newAttachedNodeList=[],t,i;__cov_aPVpJbEiQCvHOdKI3l0$CA.s['14']++;for(i=0;i<that._attachedNode.length;i++){__cov_aPVpJbEiQCvHOdKI3l0$CA.s['15']++;t=that._attachedNode[i].top;__cov_aPVpJbEiQCvHOdKI3l0$CA.s['16']++;if(t<scroll){__cov_aPVpJbEiQCvHOdKI3l0$CA.b['1'][0]++;__cov_aPVpJbEiQCvHOdKI3l0$CA.s['17']++;that._attachedNode[i].notifier.fire();}else{__cov_aPVpJbEiQCvHOdKI3l0$CA.b['1'][1]++;__cov_aPVpJbEiQCvHOdKI3l0$CA.s['18']++;console.log('not fired',t,scroll);__cov_aPVpJbEiQCvHOdKI3l0$CA.s['19']++;newAttachedNodeList.push(that._attachedNode[i]);}}__cov_aPVpJbEiQCvHOdKI3l0$CA.s['20']++;that._attachedNode=newAttachedNodeList;},'_getViewPortHeight':function(){__cov_aPVpJbEiQCvHOdKI3l0$CA.f['5']++;__cov_aPVpJbEiQCvHOdKI3l0$CA.s['21']++;try{__cov_aPVpJbEiQCvHOdKI3l0$CA.s['22']++;return(__cov_aPVpJbEiQCvHOdKI3l0$CA.b['2'][0]++,document.documentElement.clientHeight)||(__cov_aPVpJbEiQCvHOdKI3l0$CA.b['2'][1]++,1200);}catch(e){__cov_aPVpJbEiQCvHOdKI3l0$CA.s['23']++;return 1200;}},'_initialize':function(){__cov_aPVpJbEiQCvHOdKI3l0$CA.f['6']++;__cov_aPVpJbEiQCvHOdKI3l0$CA.s['24']++;var that=this;__cov_aPVpJbEiQCvHOdKI3l0$CA.s['25']++;Y.on('scroll',function(){__cov_aPVpJbEiQCvHOdKI3l0$CA.f['7']++;__cov_aPVpJbEiQCvHOdKI3l0$CA.s['26']++;var scroll=that._getScroll();__cov_aPVpJbEiQCvHOdKI3l0$CA.s['27']++;that._fireInView(scroll);});}},ive=InViewEvent;__cov_aPVpJbEiQCvHOdKI3l0$CA.s['28']++;Y.Event.define('inview',{on:function(node,sub,notifier){__cov_aPVpJbEiQCvHOdKI3l0$CA.f['8']++;__cov_aPVpJbEiQCvHOdKI3l0$CA.s['29']++;if(!ive._isInitialized){__cov_aPVpJbEiQCvHOdKI3l0$CA.b['3'][0]++;__cov_aPVpJbEiQCvHOdKI3l0$CA.s['30']++;ive._initialize();}else{__cov_aPVpJbEiQCvHOdKI3l0$CA.b['3'][1]++;}__cov_aPVpJbEiQCvHOdKI3l0$CA.s['31']++;ive._attachedNode.push({'node':node,'top':ive._getTop(node._node),'notifier':notifier});__cov_aPVpJbEiQCvHOdKI3l0$CA.s['32']++;ive._fireInView(ive._getViewPortHeight());}});},'@VERSION@',{'requires':['node','event']});

if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/gallery-event-hammer/gallery-event-hammer.js']) {
   __coverage__['build/gallery-event-hammer/gallery-event-hammer.js'] = {"path":"build/gallery-event-hammer/gallery-event-hammer.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":32},"end":{"line":1,"column":51}}},"2":{"name":"(anonymous_2)","line":37,"loc":{"start":{"line":37,"column":30},"end":{"line":37,"column":49}}},"3":{"name":"(anonymous_3)","line":40,"loc":{"start":{"line":40,"column":21},"end":{"line":40,"column":49}}},"4":{"name":"(anonymous_4)","line":45,"loc":{"start":{"line":45,"column":12},"end":{"line":45,"column":52}}},"5":{"name":"(anonymous_5)","line":50,"loc":{"start":{"line":50,"column":73},"end":{"line":50,"column":87}}},"6":{"name":"(anonymous_6)","line":55,"loc":{"start":{"line":55,"column":27},"end":{"line":55,"column":71}}},"7":{"name":"(anonymous_7)","line":60,"loc":{"start":{"line":60,"column":14},"end":{"line":60,"column":26}}},"8":{"name":"(anonymous_8)","line":64,"loc":{"start":{"line":64,"column":16},"end":{"line":64,"column":28}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":71,"column":94}},"2":{"start":{"line":10,"column":0},"end":{"line":35,"column":2}},"3":{"start":{"line":37,"column":0},"end":{"line":68,"column":3}},"4":{"start":{"line":38,"column":4},"end":{"line":67,"column":7}},"5":{"start":{"line":43,"column":12},"end":{"line":43,"column":39}},"6":{"start":{"line":46,"column":12},"end":{"line":47,"column":28}},"7":{"start":{"line":50,"column":12},"end":{"line":52,"column":15}},"8":{"start":{"line":51,"column":16},"end":{"line":51,"column":73}},"9":{"start":{"line":57,"column":12},"end":{"line":57,"column":30}},"10":{"start":{"line":61,"column":12},"end":{"line":61,"column":64}},"11":{"start":{"line":65,"column":12},"end":{"line":65,"column":24}}},"branchMap":{},"code":["(function () { YUI.add('gallery-event-hammer', function (Y, NAME) {","","/*","Copyright 2013 Yahoo! Inc.","Licensed under the BSD License.","http://yuilibrary.com/license/","*/","","'use strict';","var HAMMER_GESTURES = [","    'hold',","    'tap',","    'doubletap',","    'drag',","    'dragstart',","    'dragend',","    'dragup',","    'dragdown',","    'dragleft',","    'dragright',","    'swipe',","    'swipeup',","    'swipedown',","    'swipeleft',","    'swiperight',","    'transform',","    'transformstart',","    'transformend',","    'rotate',","    'pinch',","    'pinchin',","    'pinchout',","    'touch',","    'release'","];","","Y.Array.each(HAMMER_GESTURES, function (gesture) {","    Y.Event.define(gesture, {","        _hammer: undefined,","        processArgs: function (args, isDelegate) {","            // The args list will look like this coming in:","            // [ type, callback, node, (extras...), [filter,] thisObj, arg0...argN ]","            return args.splice(3,1)[0];","        },","        on: function (node, subscription, notifier) {","            var params = subscription._extra,","                self = this;","","            // Delegate the gesture event to HammerJS.","            this._hammer = Hammer(node.getDOMNode(), params).on(gesture, function (ev) {","                self.handleHammerEvent(ev, node, subscription, notifier);","            });","        },","","        handleHammerEvent: function (ev, node, subscription, notifier) {","            //event facade normalization","            notifier.fire(ev);","        },","","        _off: function () {","            this._hammer.off(this.type, this.handleHammerEvent);","        },","","        detach: function () {","            this._off();","        }","    });","});","","","}, 'gallery-2014.04.02-20-01', {\"requires\": [\"node-base\", \"event-touch\", \"event-synthetic\"]});","","}());"]};
}
var __cov_qsKSxIovRwiI6h6TySyBZQ = __coverage__['build/gallery-event-hammer/gallery-event-hammer.js'];
__cov_qsKSxIovRwiI6h6TySyBZQ.s['1']++;YUI.add('gallery-event-hammer',function(Y,NAME){'use strict';__cov_qsKSxIovRwiI6h6TySyBZQ.f['1']++;__cov_qsKSxIovRwiI6h6TySyBZQ.s['2']++;var HAMMER_GESTURES=['hold','tap','doubletap','drag','dragstart','dragend','dragup','dragdown','dragleft','dragright','swipe','swipeup','swipedown','swipeleft','swiperight','transform','transformstart','transformend','rotate','pinch','pinchin','pinchout','touch','release'];__cov_qsKSxIovRwiI6h6TySyBZQ.s['3']++;Y.Array.each(HAMMER_GESTURES,function(gesture){__cov_qsKSxIovRwiI6h6TySyBZQ.f['2']++;__cov_qsKSxIovRwiI6h6TySyBZQ.s['4']++;Y.Event.define(gesture,{_hammer:undefined,processArgs:function(args,isDelegate){__cov_qsKSxIovRwiI6h6TySyBZQ.f['3']++;__cov_qsKSxIovRwiI6h6TySyBZQ.s['5']++;return args.splice(3,1)[0];},on:function(node,subscription,notifier){__cov_qsKSxIovRwiI6h6TySyBZQ.f['4']++;__cov_qsKSxIovRwiI6h6TySyBZQ.s['6']++;var params=subscription._extra,self=this;__cov_qsKSxIovRwiI6h6TySyBZQ.s['7']++;this._hammer=Hammer(node.getDOMNode(),params).on(gesture,function(ev){__cov_qsKSxIovRwiI6h6TySyBZQ.f['5']++;__cov_qsKSxIovRwiI6h6TySyBZQ.s['8']++;self.handleHammerEvent(ev,node,subscription,notifier);});},handleHammerEvent:function(ev,node,subscription,notifier){__cov_qsKSxIovRwiI6h6TySyBZQ.f['6']++;__cov_qsKSxIovRwiI6h6TySyBZQ.s['9']++;notifier.fire(ev);},_off:function(){__cov_qsKSxIovRwiI6h6TySyBZQ.f['7']++;__cov_qsKSxIovRwiI6h6TySyBZQ.s['10']++;this._hammer.off(this.type,this.handleHammerEvent);},detach:function(){__cov_qsKSxIovRwiI6h6TySyBZQ.f['8']++;__cov_qsKSxIovRwiI6h6TySyBZQ.s['11']++;this._off();}});});},'gallery-2014.04.02-20-01',{'requires':['node-base','event-touch','event-synthetic']});

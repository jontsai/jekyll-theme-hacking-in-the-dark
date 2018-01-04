if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/gallery-delay/gallery-delay.js']) {
   __coverage__['build/gallery-delay/gallery-delay.js'] = {"path":"build/gallery-delay/gallery-delay.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":25},"end":{"line":1,"column":44}}},"2":{"name":"(anonymous_2)","line":8,"loc":{"start":{"line":8,"column":1},"end":{"line":8,"column":14}}},"3":{"name":"(anonymous_3)","line":33,"loc":{"start":{"line":33,"column":14},"end":{"line":33,"column":55}}},"4":{"name":"(anonymous_4)","line":35,"loc":{"start":{"line":35,"column":19},"end":{"line":35,"column":31}}},"5":{"name":"(anonymous_5)","line":39,"loc":{"start":{"line":39,"column":36},"end":{"line":39,"column":55}}},"6":{"name":"(anonymous_6)","line":40,"loc":{"start":{"line":40,"column":40},"end":{"line":40,"column":52}}},"7":{"name":"(anonymous_7)","line":47,"loc":{"start":{"line":47,"column":15},"end":{"line":47,"column":27}}},"8":{"name":"(anonymous_8)","line":51,"loc":{"start":{"line":51,"column":32},"end":{"line":51,"column":51}}},"9":{"name":"(anonymous_9)","line":52,"loc":{"start":{"line":52,"column":56},"end":{"line":52,"column":68}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":60,"column":71}},"2":{"start":{"line":8,"column":0},"end":{"line":58,"column":6}},"3":{"start":{"line":9,"column":4},"end":{"line":9,"column":17}},"4":{"start":{"line":11,"column":4},"end":{"line":14,"column":23}},"5":{"start":{"line":33,"column":4},"end":{"line":57,"column":6}},"6":{"start":{"line":34,"column":8},"end":{"line":45,"column":9}},"7":{"start":{"line":35,"column":12},"end":{"line":44,"column":14}},"8":{"start":{"line":36,"column":16},"end":{"line":37,"column":30}},"9":{"start":{"line":39,"column":16},"end":{"line":43,"column":19}},"10":{"start":{"line":40,"column":20},"end":{"line":42,"column":30}},"11":{"start":{"line":41,"column":24},"end":{"line":41,"column":66}},"12":{"start":{"line":47,"column":8},"end":{"line":56,"column":10}},"13":{"start":{"line":48,"column":12},"end":{"line":49,"column":26}},"14":{"start":{"line":51,"column":12},"end":{"line":55,"column":15}},"15":{"start":{"line":52,"column":16},"end":{"line":54,"column":26}},"16":{"start":{"line":53,"column":20},"end":{"line":53,"column":62}}},"branchMap":{"1":{"line":34,"type":"if","locations":[{"start":{"line":34,"column":8},"end":{"line":34,"column":8}},{"start":{"line":34,"column":8},"end":{"line":34,"column":8}}]}},"code":["(function () { YUI.add('gallery-delay', function (Y, NAME) {","","/**","Create a function that doesn't execute immediately when it is called.","@module gallery-delay","@author solmsted","*/","(function (Y) {","    'use strict';","","    var _Promise = Y.Promise,","","        _later = Y.later,","        _soon = Y.soon;","","    /**","    Pass in a callback function and the amount of time to delay.  Y.delay will","    return a function that will wait an amount of time, then call your callback","    function.  The arguments and execution context of the returned function will","    be passed to the callback function.  The returned function returns a promise","    for the return value of the callback function.  This promise comes with a","    cancel method which will prevent the execution of the callback function if","    called before the callback function is called.  If the amount of time to","    delay is 0, the delay will be as small as possible but your callback","    function will be guaranteed to be called in a future turn of the event loop.","    @for YUI","    @method delay","    @param {Function} callbackFunction The function to delay.","    @param {Number} [delayAmount=0] The approximate amount of time to delay in","    milliseconds.","    @return {Function}","    */","    Y.delay = function (callbackFunction, delayAmount) {","        if (!delayAmount) {","            return function () {","                var args = arguments,","                    me = this;","","                return new _Promise(function (fulfill) {","                    this.cancel = _soon(function () {","                        fulfill(callbackFunction.apply(me, args));","                    }).cancel;","                });","            };","        }","","        return function () {","            var args = arguments,","                me = this;","","            return new _Promise(function (fulfill) {","                this.cancel = _later(delayAmount, null, function () {","                    fulfill(callbackFunction.apply(me, args));","                }).cancel;","            });","        };","    };","}(Y));","","}, 'gallery-2013.05.29-23-38', {\"requires\": [\"promise\", \"yui-later\"]});","","}());"]};
}
var __cov_vi8utxF$no3rSbGpZpM$DQ = __coverage__['build/gallery-delay/gallery-delay.js'];
__cov_vi8utxF$no3rSbGpZpM$DQ.s['1']++;YUI.add('gallery-delay',function(Y,NAME){__cov_vi8utxF$no3rSbGpZpM$DQ.f['1']++;__cov_vi8utxF$no3rSbGpZpM$DQ.s['2']++;(function(Y){__cov_vi8utxF$no3rSbGpZpM$DQ.f['2']++;__cov_vi8utxF$no3rSbGpZpM$DQ.s['3']++;'use strict';__cov_vi8utxF$no3rSbGpZpM$DQ.s['4']++;var _Promise=Y.Promise,_later=Y.later,_soon=Y.soon;__cov_vi8utxF$no3rSbGpZpM$DQ.s['5']++;Y.delay=function(callbackFunction,delayAmount){__cov_vi8utxF$no3rSbGpZpM$DQ.f['3']++;__cov_vi8utxF$no3rSbGpZpM$DQ.s['6']++;if(!delayAmount){__cov_vi8utxF$no3rSbGpZpM$DQ.b['1'][0]++;__cov_vi8utxF$no3rSbGpZpM$DQ.s['7']++;return function(){__cov_vi8utxF$no3rSbGpZpM$DQ.f['4']++;__cov_vi8utxF$no3rSbGpZpM$DQ.s['8']++;var args=arguments,me=this;__cov_vi8utxF$no3rSbGpZpM$DQ.s['9']++;return new _Promise(function(fulfill){__cov_vi8utxF$no3rSbGpZpM$DQ.f['5']++;__cov_vi8utxF$no3rSbGpZpM$DQ.s['10']++;this.cancel=_soon(function(){__cov_vi8utxF$no3rSbGpZpM$DQ.f['6']++;__cov_vi8utxF$no3rSbGpZpM$DQ.s['11']++;fulfill(callbackFunction.apply(me,args));}).cancel;});};}else{__cov_vi8utxF$no3rSbGpZpM$DQ.b['1'][1]++;}__cov_vi8utxF$no3rSbGpZpM$DQ.s['12']++;return function(){__cov_vi8utxF$no3rSbGpZpM$DQ.f['7']++;__cov_vi8utxF$no3rSbGpZpM$DQ.s['13']++;var args=arguments,me=this;__cov_vi8utxF$no3rSbGpZpM$DQ.s['14']++;return new _Promise(function(fulfill){__cov_vi8utxF$no3rSbGpZpM$DQ.f['8']++;__cov_vi8utxF$no3rSbGpZpM$DQ.s['15']++;this.cancel=_later(delayAmount,null,function(){__cov_vi8utxF$no3rSbGpZpM$DQ.f['9']++;__cov_vi8utxF$no3rSbGpZpM$DQ.s['16']++;fulfill(callbackFunction.apply(me,args));}).cancel;});};};}(Y));},'gallery-2013.05.29-23-38',{'requires':['promise','yui-later']});

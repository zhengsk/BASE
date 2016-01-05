// Utils.js 0.1
// Author: zsk
// Date: 2016-01-05
;(function(root, factory) {
    if(typeof define === 'function' && define.amd) {
        define(function() {
            return (root.Utils = factory());
        });
    } else if(typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Utils = factory();
    }
} (this, function() {

    var root = this || global;
    var _previousUtils = root.Utils;

    var Utils = {};
    Utils.VERSION = '0.1';

    





    Utils.extend = function(prop, fun) {
        if(this[prop]){
            alert(prop + ' alreay exist!!')
        }else{
            Utils[prop] = fun;
        }
    }


    Utils.noConflict = function() {
        root.Utils = _previousUtils;
        return this;
    };

    return Utils;
}));


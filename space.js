"use strict";
//命名空间用于区分不同模块 namespace
var shuaige;
(function (shuaige) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = '刘德华';
        }
        Dehua.prototype.talk = function () {
            console.log('我是帅哥刘德华');
        };
        return Dehua;
    }());
    shuaige.Dehua = Dehua;
})(shuaige || (shuaige = {}));
//命名空间用于区分不同模块 namespace
var bajie;
(function (bajie) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = '马德华';
        }
        Dehua.prototype.talk = function () {
            console.log('我是二师兄马德华');
        };
        return Dehua;
    }());
    bajie.Dehua = Dehua;
})(bajie || (bajie = {}));
var dehua1 = new shuaige.Dehua();
var bajie1 = new bajie.Dehua();
dehua1.talk();
bajie1.talk();

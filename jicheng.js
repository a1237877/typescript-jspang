"use strict";
// 继承是 允许我们创建一个类 从已有的父类上继承所有的属性和方法 
// 子类可以新建父类中没有的属性和方法
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lsw = /** @class */ (function () {
    function Lsw(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Lsw.prototype.interest = function () {
        console.log('找小姐姐');
    };
    return Lsw;
}());
var lswObj = new Lsw('刘上文', 18, 'coding');
lswObj.interest();
//继承 创建子类
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.waibiao = '帅气';
        return _this;
    }
    Son.prototype.zhuanqian = function () {
        console.log('一天赚了一个亿');
    };
    //重写
    Son.prototype.interest = function () {
        _super.prototype.interest.call(this);
        console.log('建立电商平台');
    };
    return Son;
}(Lsw));
var son = new Son('wzx', 5, 'talk');
// typescript不允许多重继承
son.interest();
son.zhuanqian();

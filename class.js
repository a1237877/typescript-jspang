"use strict";
// 类是对象具体事物的一个抽象 对象时类的具体表现
var XiaoJiejie = /** @class */ (function () {
    function XiaoJiejie(name, age) {
        this.name = name;
        this.age = age;
    }
    XiaoJiejie.prototype.say = function () {
        console.log('小哥哥好');
    };
    return XiaoJiejie;
}());
var jiejie = new XiaoJiejie('范冰冰', 18);
console.log(jiejie);
jiejie.say();

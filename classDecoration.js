"use strict";
// public 公有修饰符 
//protected  受保护的
//private 私有修饰符
//readonly 只读修饰符
var XiaoJiejie = /** @class */ (function () {
    function XiaoJiejie(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    XiaoJiejie.prototype.sayHello = function () {
        console.log('小哥哥好');
    };
    XiaoJiejie.prototype.sayLove = function () {
        console.log('I love you');
    };
    return XiaoJiejie;
}());
var jiejie = new XiaoJiejie('女', 'wzx', 22);
console.log(jiejie.sex);
// console.log(jiejie.name)   私有属性或者受保护的属性不可以在外部直接访问
// console.log(jiejie.age)   protected 属性可以在继承时被子类调用
jiejie.sayHello();
// jiejie.sayLove()   报错
var Man = /** @class */ (function () {
    function Man() {
        this.sex = 'man';
    }
    return Man;
}());
var man = new Man();
man.sex = 'woman'; //只读属性无法修改

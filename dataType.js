"use strict";
var age = 18; //如果没有赋值 会打印underdifine
var height = 178.5; //number可以支持小数
console.log(age);
console.log(height);
var lsw = 'lsw.com';
console.log(lsw);
//boolean true or false
var b = true;
var c = false;
//enum 枚举类型 四季：春 夏 秋 冬
var HUMAN;
(function (HUMAN) {
    HUMAN["man"] = "nanren";
    HUMAN["woman"] = "nvren";
    HUMAN["yao"] = "yaoren";
})(HUMAN || (HUMAN = {}));
console.log(HUMAN.yao); //打印的是索引
//any 任意类型
var t = 10;
t = 'lsw';
t = true;
console.log(t);
//null 类型 null 和 underdine 类型只可以被赋值为null 和 underfine
var s = null;
console.log(s);
//void 表示没有返回值的函数
function alertName() {
    alert('My name is Tom');
}

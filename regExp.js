"use strict";
//RegExp 正则
//构造函数声明法
var reg1 = new RegExp("japang"); //一个参数
var reg2 = new RegExp("jspang", 'gi');
console.log(reg1, reg2);
//字面量声明、
var reg3 = /jSpang/i;
console.log(reg3);
// 常用的正则表达式  test(string)  exec(string)
var reg4 = /jspang/i;
var website = 'jspang.com';
// let result1:boolean = reg4.test(website)
console.log(reg4.exec(website));

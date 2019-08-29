"use strict";
//不传递任何参数
var d = new Date();
console.log(d);
//传递一个整数
var f = new Date(1000); //1970-01-01 00:00:00 
console.log(f);
//传递一个字符串
var d1 = new Date('2018/09/07 05:35:00');
var d2 = new Date('2018-09-07 05:35:00');
console.log(d1, d2);

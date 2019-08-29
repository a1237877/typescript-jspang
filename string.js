"use strict";
var js = 'lsw';
var xx = new String('wzx');
console.log(js, xx);
console.log(js.length);
// 查找字符串  indexOf
var something = '清晨起来打开窗,心情美美哒,我要出去找小姐姐';
var xiaojiejie = '小姐姐';
console.log(something.indexOf(xiaojiejie)); //没有找到则返回-1
console.log(something.lastIndexOf(xiaojiejie)); //会从最后查找的那个字符串
console.log(something.substring(8, 10)); //两个参数 起始位置 结束位置
console.log(something.replace('清晨', '晚上'));

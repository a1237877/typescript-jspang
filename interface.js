"use strict";
// interface Husband{
//     sex:string
//     interest:string
//     maibaobao?:boolean  //? 表示可选的
// }
var mySearch;
mySearch = function (source, substring) {
    var flag = source.search(substring);
    return (flag != -1);
};
console.log(mySearch('高、富、帅', '高'));

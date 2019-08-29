//RegExp 正则

//构造函数声明法
let reg1:RegExp = new RegExp("japang")//一个参数
let reg2:RegExp = new RegExp("jspang",'gi')
console.log(reg1,reg2)

//字面量声明、
let reg3:RegExp = /jSpang/i
console.log(reg3)

// 常用的正则表达式  test(string)  exec(string)
let reg4:RegExp = /jspang/i
let website:string = 'jspang.com'
// let result1:boolean = reg4.test(website)

console.log(reg4.exec(website))
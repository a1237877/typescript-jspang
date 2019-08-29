//不传递任何参数
let d:Date = new Date()
console.log(d)

//传递一个整数
let f:Date = new Date(1000)  //1970-01-01 00:00:00 
console.log(f)

//传递一个字符串
let d1:Date = new Date('2018/09/07 05:35:00')
let d2:Date = new Date('2018-09-07 05:35:00')
console.log(d1,d2)

//引用类型
// let lsw = {
//     name:'lsw',
//     age:18,
//     saySomething:function(){
//         console.log('为了前端技术')
//     }
// }
// console.log(lsw.name)
// lsw.saySomething()

// 引用类型 Array String Date regExp
// let arr1:number[]
// let arr2:Array<string>
// let arr3:Array<boolean>
//赋值方法 1.字面量赋值法 2.构造函数赋值法
let arr1:number[] = []
let arr2:number[] = [1,2,3,4,5]
let arr3:Array<string> = ['lsw','wzx','sb']
let arr4:Array<boolean> = [true,false,false]

let arr5:number[] = new Array() //构造函数赋值
let arr6:any[] = [1,'2',true]

//元祖
let x:[string,number] = ['1',1]
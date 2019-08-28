//变量的作用域 以函数划分
// var yangzi:string = '刘德华'
// function change():void{  //没有返回值的函数
//     console.log(yangzi)   //会打印出underfine
//     var yangzi:string = '马德华'
//     console.log(yangzi)
// }
// change()
// console.log(yangzi)
//全局变量 局部变量 局部变量和全局变量重名了会怎样？
// 局部变量会先起作用


//let  变量提升
function change():void{
    var yangzi:string = '刘德华'
    {
        let yangziA:string = '小沈阳'
        console.log(yangziA)
    }
    console.log(yangzi,yangziA)
}
change()
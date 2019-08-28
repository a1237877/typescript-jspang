function searchXiaojiejie(age:number,height:number):string{ //返回的值的类型

    return '找到了'+age+'岁小姐姐'+'身高有'+height
}

var age:number = 18
var height:number = 170
var result:string = searchXiaojiejie(age,height)

console.log(result)


//有可选参数的函数  加个问好就表示可选参数
// function searchDajiejie(age:number,stature?:string):string{
//     let yy:string = ''
//     yy='找到了'+age+'岁大姐姐'
//     if(stature!=undefined){//说明有值
//         yy = yy + '她有' + stature
//     }
//     return yy
// }

// var result_big:string = searchDajiejie(22,'大长腿')
// console.log(result_big)



//有默认参数的函数 用 = 来表示默认值
// function searchDajiejie(age:number=18,stature:string='大长腿'):string{
//     let yy:string = ''
//     yy='找到了'+age+'岁大姐姐'
//     if(stature!=undefined){//说明有值
//         yy = yy + '她有' + stature
//     }
//     return yy
// }
// var result_big:string = searchDajiejie(22,'小蛮腰')
// console.log(result_big)


//有剩余参数的函数
function searchDajiejie(...xuqiu:string[]):string{
   let yy:string = '找到了'
   for(let i=0;i<xuqiu.length;i++){
       yy = yy + xuqiu[i] 
       if(i<xuqiu.length-1){
           yy = yy + '、'
       }
   }
   yy = yy + '的小姐姐'
   return yy
}
var result_big:string = searchDajiejie('22','小蛮腰','瓜子脸')
console.log(result_big)
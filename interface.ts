// interface Husband{
//     sex:string
//     interest:string
//     maibaobao?:boolean  //? 表示可选的
// }

// let myhusband:Husband = {
//     sex:'man',
//     interest:'coding',
//     maibaobao:true
// }

// console.log(myhusband)

interface SearchMan{
    (source:string,substring:string):boolean
}
let mySearch:SearchMan
mySearch = function(source:string,substring:string):boolean{
    let flag = source.search(substring)
    return (flag!=-1)
}
console.log(mySearch('高、富、帅','高'))
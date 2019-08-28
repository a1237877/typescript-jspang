var age:number = 18  //如果没有赋值 会打印underdifine
var height:number = 178.5 //number可以支持小数
console.log(age)
console.log(height)

var lsw:string = 'lsw.com'
console.log(lsw)

//boolean true or false
var b:boolean = true
var c:boolean = false

//enum 枚举类型 四季：春 夏 秋 冬
enum HUMAN{man='nanren',woman='nvren',yao='yaoren'}
console.log(HUMAN.yao)  //打印的是索引

//any 任意类型
var t:any = 10
t = 'lsw'
t = true
console.log(t)

//null 类型 null 和 underdine 类型只可以被赋值为null 和 underfine
var s:null = null
console.log(s)


//void 表示没有返回值的函数
function alertName(): void {
    alert('My name is Tom');
}
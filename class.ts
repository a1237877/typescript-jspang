// 类是对象具体事物的一个抽象 对象时类的具体表现

class XiaoJiejie{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
    say(){
        console.log('小哥哥好')
    }
}
let jiejie:XiaoJiejie = new XiaoJiejie('范冰冰',18)
console.log(jiejie)
jiejie.say()
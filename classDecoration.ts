// public 公有修饰符 
//protected  受保护的
//private 私有修饰符
//readonly 只读修饰符

class XiaoJiejie{
    public sex:string
    protected name:string
    private age:number
    public constructor(sex:string,name:string,age:number){
        this.sex = sex
        this.name = name
        this.age = age
    }
    public sayHello(){
        console.log('小哥哥好')
    }
    protected sayLove(){
        console.log('I love you')
    }
}
var jiejie:XiaoJiejie = new XiaoJiejie('女','wzx',22)

console.log(jiejie.sex)
// console.log(jiejie.name)   私有属性或者受保护的属性不可以在外部直接访问
// console.log(jiejie.age)   protected 属性可以在继承时被子类调用
jiejie.sayHello()
// jiejie.sayLove()   报错

class Man{
    public readonly sex:string = 'man'
}
var man:Man = new Man()
man.sex = 'woman'  //只读属性无法修改


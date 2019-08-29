// 继承是 允许我们创建一个类 从已有的父类上继承所有的属性和方法 
// 子类可以新建父类中没有的属性和方法

class Lsw{
    public name:string
    public age:number
    public skill:string
    constructor(name:string,age:number,skill:string){
        this.name = name
        this.age = age
        this.skill = skill
    }
    public interest(){
        console.log('找小姐姐')
    }
}

let lswObj:Lsw = new Lsw('刘上文',18,'coding')
lswObj.interest()

//继承 创建子类
class Son extends Lsw{
    public waibiao:string = '帅气'
    public zhuanqian(){
        console.log('一天赚了一个亿')
    }
    //重写
    public interest(){
        super.interest()
        console.log('建立电商平台')
    }
}
var son:Son = new Son('wzx',5,'talk')
// typescript不允许多重继承
son.interest()
son.zhuanqian()
//命名空间用于区分不同模块 namespace
namespace shuaige{
    export class Dehua{
        public name:string = '刘德华'
        public talk(){
            console.log('我是帅哥刘德华')
        }
    }
}

//命名空间用于区分不同模块 namespace
namespace bajie{
    export class Dehua{
        public name:string = '马德华'
        public talk(){
            console.log('我是二师兄马德华')
        }
    }
}

let dehua1:shuaige.Dehua = new shuaige.Dehua()
let bajie1:bajie.Dehua = new bajie.Dehua()
dehua1.talk()
bajie1.talk()
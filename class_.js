function Person(name, age){
    this.name = name;
    this.age = age;
}
//写法1
Person.prototype.showName = function(){
    return `mingzi ${name}`;
}
//写法2
Object.assign(Person.prototype, {
    showName: ()=>{
        return `mingzi ${this.name}`;
    },
    showAge: ()=>{
        return `age ${this.age}`;
    }
})
let p1 = new Person('Steve', 18)
console.log(p1.showName())

class Person{
    consturctor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){ //过去写在prototype里
        return `name ${this.name}`
    }
    showAge(){
        return `age ${this.age}`
    }
}
let p1 = new Person('1', 16);
p1.showName();
//or
class Person = class{
    constructor(name, age){}
}
// 变量名
let aaa = 'strive';
let bbb = 'sss';
class Person{
    consturctor(){}
    [aaa](){
        return 'hello'
    }
    [aaa+bbb](){
        return 'hello1';
    }
}
let p1 = new Person();
console.log(p1.strive()); //‘hello’
//react中
handleChange(env){
    this.setState({
        [env.target.name] = [env.target.value]
    })
}
let json = {
    [aaa+bbb]:'welcome 51'
}
//注意：
class Person{
    constructor(){}
    
}
let p1 = new Person();
1. es6里面class没有变量提升， 在es5, 用函数模拟可以， 默认函数提升
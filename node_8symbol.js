// 定义
let lyn = Symbol('aa') // Symbol is not constructor
console.log(lyn);
// 1.symbol不能new
// 2. 私有属性Symbol返回的是一个唯一的值
// typeof lyn == 'symbol' typeof多了一个。 number《 string， boolean, undeinfed, function,单独的数据类型， 基本类型
// new Number（）， new String()
可以当key用
let syml = Symbol('str');
let json = {
    a: 'apple',
    [syml]: 'aaaa'
}
json.a;
json['a']
json[syml]
// 好处： 遍历key
for(let key in json){console.log(key)} //syml没打印出来
箭头函数 运行时（）=》{}
// generator, 生成器，解决异步的问题， 深度嵌套 async
// 定义
function* show(){
    yield 'welcome';
    yield 'to';
    return 'js'
}
//反应调用
let g1 = show();
console.log(g1); //返回对象
console.log(g1.next()); //,有点像java iterator,{value:'welcone', done: false}
console.log(g1.next()); //,有点像java iterator,{value:'to', done: false}
console.log(g1.next()); //,有点像java iterator,{value:'js', done: true}
console.log(g1.next()); //,有点像java iterator,{value:undefined, done: true}
//loop for of,自动遍历generator, return的东西不会遍历
for(let value of g1){
    console.log(value);
}
// 不仅可以forof,也可以解构赋值
let [a,b, c] = show();
console.log(a, b, c); //welcome to
let [a, ...b] = show();
console.log(a,b); // welocme [to]
// 还可以扩展运算符
console.log(...g1); // welcome to
// Array
Array.from(g1); // [welcome, to]
// generator配合axios api.github.com
// 异步：不连续， 上一个操作没有执行完， 下一个操作昭阳开始
// 同步， 连续， 上一个操作没有执行完， 下一个不能开始
关于异步：
1）回调函数
2）事件监听
3）帆布订阅
4）promise对象
co__ 每次需要generate麻烦， 有了co
async
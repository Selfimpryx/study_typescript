/**
 *  ts的原则之一就是对值所具有的结构进行类型检查，接口的作用就是为这些类型命名和你的代码或者是第三方代码定义契约
 */

 //接口初探
 function printLable(labelledObj:{label:string}){
   console.log(labelledObj.label)
 }
 let myObj = {size:10,label:"size 10 object"}
 printLable(myObj)
 //检查器会检查printLable的调用,printLable有一个参数，并要求这个对象参数里面有一个名为label类型为string的属性
 //我们传入的参数可能有很多属性，但是编译器只会检查那些必须的属性是否存在，并且类型是否相同

 //使用接口重写上面的列子
 interface LabelledValue{
   label:string
 }
 function printLabel2(labelledObj:LabelledValue){
  console.log(labelledObj.label)
 }
//  let myObj2 = {size:10,label:"size 10 object"}
printLabel2(myObj)
//只要传入的对象满足LabelledValue提到的必要的条件 他就是被允许的


//可选属性
interface ConfigSquare{
  color?:string,
  width?:number
}
function createSquare(config:ConfigSquare):{color:string,area:number}{
  let squareObj = {color:'red',area:100}
  if(config.color){
    squareObj.color = config.color
  }
  if(config.width){
    squareObj.area = config.width*config.width
  }
  return squareObj
}
let obj = {color:'yellow'}
console.log(createSquare(obj))

//可选属性就是在名字后面加一个?符号
//好处:1.对可能存在的属性进行预定义 2.可以捕获引用不存在的睡醒的错误


//故意将color拼错 会报错
// function createSquare2(config:ConfigSquare):{color:string,area:number}{
//   let squareObj = {color:'red',area:100}
//   if(config.clor){
//     squareObj.color = config.clor // Property 'clor' does not exist on type 'ConfigSquare'. Did you mean 'color'?
//   }
//   if(config.width){
//     squareObj.area = config.width*config.width
//   }
//   return squareObj
// }
// console.log(createSquare2({color:'yellow'}))

//只读属性
//一些对象属性只能在对象刚刚创建的时候修改其值，可以在属性名之前用readonly来指定只读属性
interface Point{
  readonly x:number,
  readonly y:number
}
//通过赋值一个对象字面量来构造一个point 赋值后 xy就不可以在改变
let p1:Point = {x:20,y:30}
//p1.x = 50 //Cannot assign to 'x' because it is a constant or a read-only property.
// ts具有ReadonlyArray<T>类型 他与Array<T>类似，但是吧所有可变的方法都去掉了 可以确保数组在创建之后就不可以修改
let a :number[] = [1,2,34,4]
let ro:ReadonlyArray<number> = a
//error
// ro[0]= 50
// ro.push(5)
// ro.length = 100

// a = ro
//就算将ReadonlyArray赋值给一个普通的数组也不可以，但是但是可以用类型断言重写
a = ro as number[]

//如何区别该使用readonly还是const
// 看把他作为一个变量还是一个属性  作为变量的话就用const 作为属性的话就用readonly

//额外的属性检查
// 当传入的属性和接口提示的可选属性不同的时候 会报错
// 比如上述可选属性中
// createSquare({colour:'red'}) //Argument of type '{ colour: string; }' is not assignable to parameter of type 'ConfigSquare'.
// 1.绕开额外的属性检查最简便的方法是使用断言
createSquare({colour:'red'} as ConfigSquare) //这样就不会报错了
// 2.如果还有任意数量的其他属性 我们可以添加一个字符串索引签名
interface SquareConfig {
  color?:string;
  width?:number;
  [propName:string]:any
}
//这表示的是SquareConfig可以有任意数量的属性 而且只要他不是color和width 我们无所谓他的类型是什么
// 3.可以把参数对象赋值给另一个对象，因为SquareConfig不会经过额外的属性检查 所以不会报错
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);

//函数类型的接口
// 接口除了能描述对象拥有的各种个样的外形 也可以描述函数类型
//定义一个调用签名 格式是有参数列表和返回值类型的
interface SearchFunc {
  (source:string,substring:string):boolean;
}
//使用这个接口
let mySearch :SearchFunc;
mySearch = function(source:string,substring:string){
  let result = source.search(substring)
  return result>-1
}
// function(src:string,sub:string) 函数的参数名不需要与接口中定义的名字相匹配
// mySearch(222,1)  err Argument of type '222' is not assignable to parameter of type 'string'.
mySearch('steeee','eee')
//如果传入的类型或者是函数的返回值跟接口定义的类型不相同 都会报错

//可索引的类型
//与使用接口描述函数差不多，我们可以描述那些能够通过索引得到的类型 比如a[10]或者是ageMap['daniel']
//格式是有一个索引签名 描述对象索引的类型还有对应的返回值类型
interface StringArray{
  [idx:number]:string
}
let myArray : StringArray = ['Bob','Fred']
let myStr :string = myArray[0]
//支持两种索引签名，字符串和数字，但是数字索引的返回值必须是字符串的类型
//可以将索引签名设置为只读 防止给索引赋值
interface ReadonlyStringArray{
  readonly [index:number]:string
}
let myArray2:ReadonlyStringArray = ['alice','bob']
// myArray2[2]='mallory' error 签名是只读的
/** 
 *  ts提供了几乎与js相同的数据类型  数字，字符串，结构体，布尔等等  还提供了实用的枚举类型方便我们的使用
 */

 //布尔值
let isDone:boolean = false; //定义一个布尔类型的变量 :boolean强调这个变量只能是布尔类型
// isDone = 2  Type 'number' is not assignable to type 'boolean'. 如果给他赋值其他数据类型的话会报错 类型number不能赋值给类型boolean

//数字
// ts中的所有数字都是浮点数 这些浮点数的类型是 number 支持 十进制 十六进制 二进制和八进制
let decLiteral: number = 6

//字符串
//和js一样 ，使用" 或者是 ' 表示字符串
let name1:string = 'bob'
name1 = 'smith'
console.log(name) //smith
//还可以使用模板字符串 可以定义多行文本和内嵌表达式 和 es6类似 使用``反引号包围 使用 ${} 嵌入表达式
let age: number = 37
let myAge: string = `I will be ${ age + 1} years old next month`
console.log(myAge) //I will be 38 years old next month

//数组
//有两种方式可以定义数组
//第一种 元素类型后面接上 []
let list1: number[] = [1,2,3]
//第二种 使用数组泛型
let list2: Array<number> = [4,5,6]
// let list3:Array<number> = [1,2,'333']

//元组 tuple
//元组类型你可以表示一个已知元素数量和类型的数组，各元素的类型不必相同
let tArr:[number,string]
tArr = [1,'字符'] //ok
// tArr = ['字符',222] error
//访问一个已知索引的元素 会得到正确的类型
// console.log(tArr[0].substr(1)) 'substr' does not exist on type 'number'
// console.log(tArr[1].substr(1))
// tArr[2] = '字符串2'
// console.log(tArr)

// tArr[3] = 222
// tArr[4] = true
// console.log(tArr)

 
//枚举  enum
//为一组数组赋予友好的名字
enum Color {Red,Green,Blue}
let c:Color = Color.Green
console.log(c) //1
// 默认 从0开始是元素的编号 也可以手动指定成员的数值
enum Color2 {Red=2,Green=5,Blue}
let c2:Color2 = Color2.Green
console.log(c2) //5
//枚举类型的便利就是你可以通过枚举的名字得到他的值  也可以由值得到他的名字
let colorName: string = Color2[5]
console.log(colorName) //Green

//Any
//不清楚类型的变量随便指定一个类型
let notSure: any = 4
notSure = '字符串' //ok
notSure = false //ok
//可以定义数组
let aList:any[] = [1,'22',false] //ok
let aList2: Array<any> = [true,'hga',777] //ok

// void
//与any相反 就是没有任何类型 比如一个函数没有返回值的时候就是void
function warnUser():void{
  console.log('this is warnUser message')
}
//声明一个void变量没用 只能为其赋值 null和undefined
// let unuseable:void = '2222' Type '"2222"' is not assignable to type 'void'.
let unuseable:void = null //ok

// null和undefined
// null和undefined有他们各自的类型叫null和undefined 和void类似
let u:undefined = undefined
let n:null = null
//默认情况下null和undefined是任何类型的子类型 可以赋值给任何类型
let num:number = null //ok
let str:string = undefined //ok

//但是指定了--strictNullChecks标记(严格空校验) 就只能赋值给void和他们自己

//Never
/**
 * 表示那些永不存在的值的类型 是那些总会抛出异常或者根本不会有返回值的函数表达式后箭头函数表达式的返回值类型
 * 变量也可能是never类型  当他们被永不为真的类型保护所约束时
 * 是任何类型的子类型 可以赋值给任何类型 没有类型是never的子类型 或者是可以赋值给never 即使是any也不行
 */
//返回never类型的函数
function error(message:string):never{
  throw new Error(message)
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// Object
//非原始类型  是除了 number string Boolean symbol null undefined 之外的类型

/**
 * any和object的区别
 *    any可以给他赋值还可以调用上面的方法  但是object只能赋值，不能在他上面调用任意的方法
 */
// let notSure2:any = 4
// notSure2.ifItExists() //ok

// let prettySure: Object = 4;
// prettySure.toFixed(); //Property 'toFixed' does not exist on type 'Object'.


//类型断言
//清楚一个实体的类型是什么的时候，通过类型断言告诉编译器 相信我
// 两种形式
let someValue: any = "this is a string";
let strLength:number = (<string>someValue).length

let someValue2:any = "this is a string"
let strLength2:number = (someValue2 as string).length

//两种形式是等价的 但是使用jsx的时候  只有as语法被允许



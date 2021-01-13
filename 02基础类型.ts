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
let name:string = 'bob'
name = 'smith'
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

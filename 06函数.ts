//函数
//和js一样 ts可以创建有名字的函数和匿名函数
function add(x,y){
  return x + y
}
let myAdd = function(x,y){
  return x + y
}

//为函数定义类型
function add2(x:number,y:number):number{
  return x + y
}
let myAdd2 = function(x:number,y:number):number{
  return x + y
}
//可以给每个参数添加类型之后 在函数添加一个返回值类型 ts能够根据语句自动推断出返回值类型

//书写完整的函数类型
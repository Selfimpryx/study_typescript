//泛型
//当一个函数可以任何类型的值的时候
//不使用泛型的话 我们的函数只能是 
function identity1(arg:number):number{
  return arg
}
// 或者是使用any
function identity2(arg:any):any{
    return arg
}
//使用any类型导致我们这个函数可以接受任何类型的arg参数 但是确丢失了一些信息 传入的类型与返回的类型应该是相同的，如果我们传入的是一个数字，我们只知道任何类型的值都可能被返回

//我们需要一种方法使返回值的类型与传入的参数的类型相同的 我们使用类型变量
function identity3<T>(arg:T):T{
  return arg
}
//我们给identity3传入一个类型变量T T帮我捕获用户传入的类型(比如number) 之后我们就可以使用这个类型 然后在将他作为返回值类型 我们就知道参数类型和返回值类型是相同的了

//这个就是泛型 因为他可以适用多个类型 还不会丢失信息

//适用泛型函数
let output = identity3<string>('myString')
//也可以不写
let output2 = identity3('myString')
// 编译器会自动帮我们确定T的类型
/**
 *  ts的原则之一就是对值所具有的结构进行类型检查，接口的作用就是为这些类型命名和你的代码或者是第三方代码定义契约
 */
//接口初探
function printLable(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "size 10 object" };
printLable(myObj);
function printLabel2(labelledObj) {
    console.log(labelledObj.label);
}
//  let myObj2 = {size:10,label:"size 10 object"}
printLabel2(myObj);
function createSquare(config) {
    var squareObj = { color: 'red', area: 100 };
    if (config.color) {
        squareObj.color = config.color;
    }
    if (config.width) {
        squareObj.area = config.width * config.width;
    }
    return squareObj;
}
var obj = { color: 'yellow' };
console.log(createSquare(obj));
//通过赋值一个对象字面量来构造一个point 赋值后 xy就不可以在改变
var p1 = { x: 20, y: 30 };
//p1.x = 50 //Cannot assign to 'x' because it is a constant or a read-only property.
// ts具有ReadonlyArray<T>类型 他与Array<T>类似，但是吧所有可变的方法都去掉了 可以确保数组在创建之后就不可以修改
var a = [1, 2, 34, 4];
var ro = a;
//error
// ro[0]= 50
// ro.push(5)
// ro.length = 100
// a = ro
//就算将ReadonlyArray赋值给一个普通的数组也不可以，但是但是可以用类型断言重写
a = ro;
//如何区别该使用readonly还是const
// 看把他作为一个变量还是一个属性  作为变量的话就用const 作为属性的话就用readonly
//额外的属性检查
// 当传入的属性和接口提示的可选属性不同的时候 会报错
// 比如上述可选属性中
// createSquare({colour:'red'}) //Argument of type '{ colour: string; }' is not assignable to parameter of type 'ConfigSquare'.
// 1.绕开额外的属性检查最简便的方法是使用断言
createSquare({ colour: 'red' }); //这样就不会报错了
//这表示的是SquareConfig可以有任意数量的属性 而且只要他不是color和width 我们无所谓他的类型是什么
// 3.可以把参数对象赋值给另一个对象，因为SquareConfig不会经过额外的属性检查 所以不会报错
var squareOptions = { colour: "red", width: 100 };
var mySquare = createSquare(squareOptions);
//使用这个接口
var mySearch;
mySearch = function (source, substring) {
    var result = source.search(substring);
    return result > -1;
};
// function(src:string,sub:string) 函数的参数名不需要与接口中定义的名字相匹配
// mySearch(222,1)  err Argument of type '222' is not assignable to parameter of type 'string'.
mySearch('steeee', 'eee');
var myArray = ['Bob', 'Fred'];
var myStr = myArray[0];
var myArray2 = ['alice', 'bob'];
myArray2[2] = 'mallory';

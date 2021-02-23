var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类
// 类的例子
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'hello' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
//声明了一个Greet类，有三个成员 一个叫做greeting的属性 一个是构造函数 一个是greet方法
//引用类的成员的时候都用到了this 代表我们访问的是类的成员
//最后我们使用new 构造了一个Greeter类的实例 他会调用之前定义的构造函数创建一个greeter类型的新对象 并执行构造函数初始化他
//继承
//基于类的设计模式中最基本的模式就是使用继承来扩展现在的类
// class Animal{
//   move(distanceInMeters:number = 0){
//     console.log(distanceInMeters)
//   }
// }
// class Dog extends Animal{
//   bark(){
//     console.log('bark')
//   }
// }
// let dog = new Dog()
// dog.bark()
// dog.move(10)
// dog.bark()
//最基本的继承 类从基类中继承了属性和方法 Dog是一个派生类 派生自Animal基类 通过extends关键字 派生类就是子类基类通常被称为超类
// class Animal {
//   name: string;
//   constructor(theName: string) { this.name = theName; }
//   move(distanceInMeters: number = 0) {
//       console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }
// class Snake extends Animal {
//   constructor(name: string) { super(name); }
//   move(distanceInMeters = 5) {
//       console.log("Slithering...");
//       super.move(distanceInMeters);
//   }
// }
// class Horse extends Animal {
//   constructor(name: string) { super(name); }
//   move(distanceInMeters = 45) {
//       console.log("Galloping...");
//       super.move(distanceInMeters);
//   }
// }
// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");
// sam.move();
// tom.move(34);
//派生类必须调用super() 才会执行基类的构造函数 在构造函数访问this之前 必须要调用super() 这是ts规定的重要规则
//修饰符
// 默认为 public 在ts中成员都默认为public
// private
//不能在声明他的类的外部访问
var Animal = /** @class */ (function () {
    function Animal(tyName) {
        this.name = tyName;
    }
    return Animal;
}());
// new Animal("Cat").name; // 错误: 'name' 是私有的.
//protected
// 跟private相似，但是protected在派生类中仍然可以访问
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误
//我们不能在person类外使用name 但是我们仍然可以通过Employee类的实例方法访问 因为Employee是由person派生来的
//构造函数也可以被标记为peotected 但是意味着这个类不能被实例化但是可以被继承
// readonly 将属性设置为只读的 只读属性只能在声明时或者是构造函数里被初始化
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
dad.name = 'Man';

// 类
// 类的例子
class Greeter{
  greeting:string;
  constructor(message:string){
    this.greeting = message
  }
  greet(){
    return 'hello'+this.greeting
  }
}
let greeter = new Greeter('world')
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
class Animal {
  private name:string;
  constructor(tyName:string){
    this.name = tyName
  }
}

// new Animal("Cat").name; // 错误: 'name' 是私有的.

//protected
// 跟private相似，但是protected在派生类中仍然可以访问
class Person {
  protected name: string;
  constructor(name: string) { this.name = name; }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
      super(name)
      this.department = department;
  }

  public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误
//我们不能在person类外使用name 但是我们仍然可以通过Employee类的实例方法访问 因为Employee是由person派生来的
//构造函数也可以被标记为peotected 但是意味着这个类不能被实例化但是可以被继承

// readonly 将属性设置为只读的 只读属性只能在声明时或者是构造函数里被初始化
class Octopus{
  readonly name:string;
  constructor(theName:string){
    this.name = theName
  }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name ='Man' //错误 只读属性不能修改

//存储器
//ts支持getters/setters来截取对对象成员的访问


//在方法的前面加上get 和 set
let passcode = "secret passcode";

class Employee2 {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee2();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}

//static  静态属性 只存在于类本身上而不是类的实例上
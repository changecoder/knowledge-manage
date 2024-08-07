# JavaScript基础

## 原型链
在ES6 Class出来之前，JavaScript中只有对象没有类，为了解决共享数据的问题，JavaScript的开发者们提出了原型这一概念，来实现数据和方法的共享。

原型链是JavaScript中实现对象继承的关键机制。每个对象都有一个内部属性[[Prototype]],它指向该对象的原型。当我们访问一个对象的属性或方法时，如果该对象自身没有这个属性或方法，JavaScript引擎会沿着原型链向上查找，直到找到这个属性或方法为止。

### prototype与__proto__
- **prototype** 每个函数都会创建一个prototype属性，这个属性是一个对象，包含应该由特定引用类型的实例共享的属性和方法。实际上，这个对象就是通过调用构造函数创建的对象的原型。使用原型对象的好处是，在它上面定义的属性和方法都可以被对象实例共享。原来在构造函数中直接赋给对象实例的值，可以直接赋值给它们的原型。
- **__proto__** 存在于普通对象和函数对象中, 作用就是引用父类的 prototype 对象，JS在通过 new 操作符创建一个对象的时候，通常会把父类的 prototype 赋值给新对象的 __proto__属性，这样就形成了一代代传承

## 作用域
JS中的作用域是一个存储变量、函数以及对象的位置，每个变量、函数和对象都被存储在一个特定的作用域中，它是指变量和函数在代码中的可访问范围，作用域决定了代码中哪些部分可以访问特定的变量和函数，通过作用域，我们可以将变量和函数封装在不同的作用域中，使其在合适的范围内可访问。

### 作用域类型
- **全局作用域** 全局作用域是在整个代码中都可访问的作用域。在浏览器环境中，全局作用域通常是指window对象；在node环境下，则是globalThis或global
- **局部作用域** JS中的局部作用域一般代指函数作用域（Function Scope），它是在函数内部声明的作用域，函数内部的变量和函数只能在函数内部访问，外部无法直接访问
- **块级作用域** 块级作用域是在代码块（通常是由大括号{}包裹起来的部分）内声明的作用域。比如if(){...}、for(...){...}、try{...}等

#### 块级作用域
- ES6之前，由于变量都是使用var声明的，所以没有块级作用域此类概念，只有全局作用域和函数（局部）作用域。那么需要模拟块级作用域如何怎么操作呢？
答案是使用立即执行函数表达式（IIFE）：通过将代码包装在匿名函数中并立即执行该函数，可以创建一个独立的作用域，使得内部声明的变量在函数外部不可访问。

- ES6以后，官方推出了块级作用域的概念，使用let和const关键字声明的变量具有块级作用域，它们只能在声明的代码块内部访问。

### 作用域链
作用域链（Scope Chain）是JS用于解析标识符（变量和函数）的机制，它是由多个嵌套的作用域组成的，它决定了变量和函数的查找顺序。

当访问一个变量时，JS引擎会先从当前作用域开始查找，如果找不到这个名称的标识符则继续向上一级作用域查找，直到找到变量或达到全局作用域为止，如果在全局作用域中仍然找不到，则认为该标识符未定义。

### 变量提升
变量提升是JS在代码执行前将变量和函数声明提升到作用域顶部的行为，它由JavaScript引擎在代码执行前的编译阶段处理。变量提升影响了整个作用域范围内的代码，它允许我们在声明之前使用变量，但是需要注意一点：只有变量声明被提升，赋值不会提升。

#### 优先级问题
当同一个作用域中同时出现同名的函数和变量时，函数提升的优先级更高，也就是说函数会在变量之上声明。

示例:
```
var a = 10
function a() {} // 使用function声明函数可以看成是声明 + 赋值
console.log(a) // 10
```

### 闭包
当函数开始执行时，函数中的变量以及函数会压入栈中，那么此时如果当前的作用域中有另一个函数正在使用该作用域的变量，该变量占用的内存也不会被垃圾回收机制回收，这个现象就是闭包
- 即使外部函数已经执行完毕，内部函数依然可以访问外部函数作用域中的变量（当栈将函数弹出时，变量依然处于内存中）
- 闭包可以持有对外部变量的引用，使得外部变量的值在内部函数中保持活动状态（不被垃圾回收机制回收）
- 闭包中的内部函数可以修改并更新外部变量的值
- 闭包的函数可以获取到创建时的整个作用域链的标识符
- 闭包可能会导致内存泄漏，被闭包引用的变量无法被垃圾回收机制处理

#### 使用场景
- **封装私有变量** JS中没有TS的private关键词，无法直接定义私有变量，但是可以通过闭包产生私有环境作用域（ES2022后引入了#关键字，用于定义私有变量，相比于使用闭包，更直观和方便）
- **延长变量周期** 通过内部函数对外部作用域的可访问性实现
- **模块化、命名空间**
- **缓存**

### 动态作用域与词法作用域
作用域的种类有两种：分别是动态作用域和词法作用域（静态作用域）。
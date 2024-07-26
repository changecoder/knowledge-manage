# JavaScript类型
- **JavaScript基础数据类型** Number, String, Boolean, Undefined, Null, Symbol
- **JavaScript引用类型** Object

## String
常用操作方法
- **字符操作** charAt，charCodeAt(获取字符的 Unicode 编码)，fromCharCode(根据 Unicode 编码返回对应的字符)
- **字符串提取** substr，substring ，slice
- - **位置索引** indexOf ，lastIndexOf
- **大小写转换** toLowerCase，toUpperCase
- **模式匹配** match，search，replace，split
- **其他操作** concat，trim，localeCompare

## Number
Number 类型采用 IEEE754 标准中的 “双精度浮点数” 来表示一个数字，不区分整数和浮点数 。

JavaScript 中能表示的数值范围为2的1024次方和 2的负-1023次方。

### 精度丢失
计算机中的数字都是以二进制存储的，如果要计算 0.1 + 0.2 的结果，计算机会先把 0.1 和 0.2 分别转化成二进制，然后相加，最后再把相加得到的结果转为十进制 。

但有一些浮点数在转化为二进制时，会出现无限循环 。比如， 十进制的 0.1 。

而存储结构中的尾数部分最多只能表示 53 位。为了能表示 0.1，只能模仿十进制进行四舍五入了，但二进制只有 0 和 1 ， 于是变为 0 舍 1 入 。

### 位运算
- 按位非（NOT）：~ 
- 按位与（AND）：& 
- 按位或（OR）： |
- 按位异或（XOR）：^
- 左移：<<
- 有符号右移：>> 
- 无符号右移：>>>
```
// 按位非运算
let a = 10;     // 0000 0000 0000 1010
let b = ~a;     // 1111 1111 1111 0101
// 按位与运算
let c = 10;     // 0000 0000 0000 1010
let d = 3;      // 0000 0000 0000 0011
let e = c & d;  // 0000 0000 0000 0010
// 按位或运算
let f = 10;     // 0000 0000 0000 1010
let g = 3;      // 0000 0000 0000 0011
let h = f | g;  // 0000 0000 0000 1011
// 按位异或运算
let i = 10;     // 0000 0000 0000 1010
let j = 3;      // 0000 0000 0000 0011
let k = i ^ j;  // 0000 0000 0000 1001
// 有符号右移运算
let l = 10;     // 0000 0000 0000 1010
let m = l >> 1; // 0000 0000 0000 0101
// 无符号右移运算
let n = -10; // 1111 1111 1111 0110
let o = n >>> 1; // 0111 1111 1111 1011
// 左移运算
let p = 10; // 0000 0000 0000 1010
let q = p << 1; // 0000 0000 0001 0100
```

### Math
常用方法
- **abs** 取绝对值
- **ceil** 对数进行上舍入
- **floor** 对数进行上舍入
- **max** 取最大
- **min** 取最小
- **random** 取随机数
- **round** 四舍五入
常用属性
- **PI** 圆周率

## Object
对象是一组没有特定顺序的值 。由于其值的大小会改变，所以不能将其存放在栈中，否则会降低变量查询速度。因此，对象的值存储在堆(heap)中，而存储在变量处的值，是一个指针，指向存储对象的内存处，即按址访问。

### 对象拷贝 Object.assign
**浅拷贝** Object.assign，拷贝属性值。当属性值是基本类型时，没有什么问题 ，但如果该属性值是一个指向对象的引用，它也只能拷贝那个引用值，而不会拷贝被引用的那个对象。
**深拷贝** JSON.parse(JSON.stringify())

### 数据属性特性
- [[Configurable]]：能否通过 delete 删除属性从而重新定义属性，或者能否把属性修改为访问器属性。该默认值为 true。
- [[Enumerable]]：表示能否通过 for-in 循环返回属性。默认值为 true。
- [[Writable]]：能否修改属性的值。默认值为 true。
- [[Value]]：包含这个属性的数据值。读取属性值的时候，从这个位置读；写入属性值的时候，把新值保存在这个位置。默认值为 undefined 。

### 访问器属性
访问器属性不包含数据值，它们包含一对 getter 和 setter 函数
- [[Configurable]]：表示能否通过 delete 删除属性从而重新定义属性，或者能否把属性修改为数据属性。默认值为true 。
- [[Enumerable]]：表示能否通过 for-in 循环返回属性。默认值为 true。
- [[Get]]：在读取属性时调用的函数。默认值为 undefined 。
- [[Set]]：在写入属性时调用的函数。默认值为 undefined 。

### API
- **create(prototype[,descriptors])**: 用于原型链继承。创建一个对象，并把其 prototype 属性赋值为第一个参数，同时可以设置多个 descriptors 。
- **defineProperty(O,Prop,descriptor)**: 用于定义对象属性的特性。
- **defineProperties(O,descriptors)**: 用于同时定义多个属性的特性。
- **getOwnPropertyDescriptor(O,property)**: 获取 defineProperty 方法设置的 property 特性。
- **getOwnPropertyNames**: 获取所有的属性名，不包括 prototy 中的属性，返回一个数组。
- **keys()**: 和 getOwnPropertyNames 方法类似，但是获取所有的可枚举的属性，返回一个数组。
- **preventExtensions(O)**: 用于锁住对象属性，使其不能够拓展，也就是不能增加新的属性，但是属性的值仍然可以更改，也可以把属性删除。
- **Object.seal(O)**: 把对象密封，也就是让对象既不可以拓展也不可以删除属性（把每个属性的 configurable 设为 false），单数属性值仍然可以修改。
- **Object.freeze(O)**: 完全冻结对象，在 seal 的基础上，属性值也不可以修改（每个属性的 wirtable 也被设为 false）。

## 静态类型与动态类型
**静态类型** 声明一个类型用来存放指定类型的值，提供了程序的正确性
**动态类型** 允许一个变量在任意时刻存放任意类型的数据，提高了程序的灵活性

## 类型的相互转换(显示转换)

### Boolean值转换

| 原始值类型	| 目标值类型	| 结果 |
| --- | :---: | :---: | 
| boolean	| 布尔值	| 本身值，false 就为 false ，true 就为 true |
| number	| 布尔值	| 0, NaN 为 false 否则都为 true |
| string	| 布尔值	| 除了空字符串为 false 其他都为 true |
| undefined、null	| 布尔值	| false |
| symbol	| 布尔值	| true |
| 对象	| 布尔值	| true |
| 数组	| 布尔值	| true |

### String值转换

| 原始值类型	| 目标值类型	| 结果 |
| --- | :---: | :---: | 
| boolean	| 字符串	| true: 'true'；false: 'false' |
| number	| 字符串	| 数字字符串 |
| string	| 字符串	| 字符串本身值 |
| undefined、null	| 字符串	| 抛错 |
| symbol	| 字符串	symbol 字符串 |
| 对象	| 字符串	| '[object Object]' |
| 数组	| 字符串	| 空数组转为空字符串，否则转为由逗号拼接每一项的字符串 |
示例
```
console.log(String([1， 2， 3])) // '1, 2, 3'
console.log(String(null)) // 抛错
console.log(String({})) // '[object Object]'
console.log(String(Symbol('test'))) // 'Symbol(test)'
```

### Number值转换

| 原始值类型	| 目标值类型	| 结果 |
| --- | :---: | :---: | 
| boolean	| 数字	| true 转换为 1，false 转换为 0 |
| number	| 数字	| 数字本身 |
| string	| 数字	| 除了都是数字组成的字符串，能转换成数字外，其他都是 NaN |
| null	| 数字	| 0 |
| undefined	| 数字	| NaN |
| symbol	| 数字	| 抛错 |
| 对象	| 数字	| NaN |
| 数组	| 数字	| 空数组转换为0；只有一项（数字）的数组转换为这个数字；只有一项（空字符串、undefined、null）的数组转换为0；除上述以外情况的数组转换为 NaN |

示例
```
console.log(Number(undefined)) // NaN
console.log(Number({})) // NaN
console.log(Number([])) // 0
console.log(Number([1])) // 1
console.log(Number([null])) // NaN
console.log(Number([1, 2])) // NaN
console.log(Number(Symbol('test'))) // 抛错
```

## 隐式转换
触发JS的隐性类型转换机制
1. 当使用 ==、&&、|| 等逻辑操作符进行判断时
2. 当使用 + - * / 四则运算符进行操作时
3. 当使用 > < >= <= 关系操作符
示例
```
console.log([] == ![]) // true 最终0 == 0
console.log({} == !{}) // false 最终NaN == 0
console.log(1 + '1') // '11' 最终 '1' + '1'
console.log(true + true) // 2 最终 1 + 1
console.log(4 + []) // '4' 最终 '4' + ''
console.log(4 + {}) // '4[object Object]' 最终 '4' + '[object Object]'
console.log(4 + [1]) // '41' 最终 '4' + '1'
console.log(4 + [1, 2, 3, 4]) // '41, 2, 3, 4' 最终 '4' + '1, 2, 3, 4'
console.log('a' + + 'b') // 'aNaN' +'b'为NaN 最终 'a' + 'NaN'
```

### 使用 == 操作符进行判断时
两个操作数类型一样的情况:
1. 如果两个操作数是同类基本类型值，则直接比较
2. 如果两个操作数是同类引用类型值，则比较内存地址
两个操作数类型不一样的情况:
1. 如果有一个操作数是布尔值，则将这个布尔值转换为数字再进行比较
2. 如果有一个操作数是字符串，另一个操作数是数字，则将字符串转换成数字再进行比较
3. 如果有一个操作数是引用类型的值，则调用该实例的 valueOf 方法，如果得到的值不是基本类型的值，再调用该实例的 toString 方法，用得到的基本类型的值按照前面的规则进行匹配对比。

### 使用 + 进行判断时
1. 两个操作数都为数字时直接运行加法操作
2. 若有一方为字符串，则将两个操作数都转换成字符串，进行字符串拼接操作。
3. true + true / false + false / null + null 转换为数字进行加法运算
4. undefined + undefined 进行加法运算，结果为 NaN

### 特殊情况
1. null == undefined 判断为 true
2. null 和 undefined 无法转换为基本类型值
3. NaN != NaN 判断为 true，事实上，NaN 更像一个特例，谁都不等于, 只能使用isNaN

### 使用除 + 号以外的四则运算符判断时
直接进行数学运算，行就行，不行就直接 NaN，简单粗暴。

### 关系操作符：>，>=，<，<=
1. 如果两个操作数都是数值，则执行数值比较。
2. 如果两个操作数都是字符串，则逐个比较两者对应的字符编码(charCode)，直到分出大小为止。
3. 如果操作数是其他基本类型，则调用Number() 将其转化为数值，然后进行比较。
4. NaN 与任何值比较，均返回 false。
5. 如果操作数是对象，则调用对象的 valueOf 方法（如果没有 valueOf ，就调用 toString 方法），最后用得到的结果，根据前面的规则执行比较。 
示例
```
console.log('a' > 'b'); // false, 即 'a'.charCodeAt(0) > 'b'.charCodeAt(0)
console.log(2 > '1');  // true, 即 Number('1') = 1
console.log(true > 0); // true, 即 Number(true) = 1
console.log(undefined > 0); // false, Number(undefined) = NaN
console.log(null < 0); // false, Number(null) = NaN
console.log(new Date > 100); // true , 即 new Date().valueOf()
```

## 类型判断

### typeof
返回'number', 'string', 'object', 'function', 'undefined', 'symbol', 'boolean'
1. 对于基本类型，除 null 以外，均可以返回正确的结果。
2. 对于引用类型，除 function 以外，一律返回 object 类型。
3. 对于 null ，返回 object 类型。
4. 对于 function 返回  function 类型。
示例
```
console.log(typeof '') // 'string'
console.log(typeof 1) // 'number'
console.log(typeof {}) // 'object'
console.log(typeof true) // 'boolean'
console.log(typeof Symbol('a')) // 'symbol'
console.log(typeof null) // 'object'
console.log(typeof undefined) // 'undefined'
const a = () => {}
console.log(typeof a) // 'function'
```

### instanceof
instanceof 是用来判断 A 是否为 B 的实例, instanceof 检测的是原型, 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型。模拟函数如下
```
function instanceTest(a, b) {
  let proto = a.__proto__
  let isInstance = false
  while (proto !== null && !isInstance) {
    isInstance = proto === b.prototype
    proto = proto.__proto__
  }
  return  isInstance
}
```

### constructor
当一个函数 F被定义时，JS引擎会为F添加 prototype 原型，然后再在 prototype上添加一个 constructor 属性，并让其指向 F 的引用。
```
console.log(''.constructor === String)
console.log(new Date().constructor === Date)
console.log(new Error().constructor === Error)
console.log(document.constructor === HTMLDocument)
console.log(window.constructor === Window)
```
1. null 和 undefined 是无效的对象，因此是不会有 constructor 存在的，这两种类型的数据需要通过其他方式来判断。
2. 函数的 constructor 是不稳定的，这个主要体现在自定义对象上，当开发者重写 prototype 后，原有的 constructor 引用会丢失，constructor 会默认为 Object。

### toString
toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]]
```
console.log(Object.prototype.toString.call(''))   // [object String]
console.log(Object.prototype.toString.call(1))    // [object Number]
console.log(Object.prototype.toString.call(true)) // [object Boolean]
console.log(Object.prototype.toString.call(Symbol()) //[object Symbol]
console.log(Object.prototype.toString.call(undefined)) // [object Undefined]
console.log(Object.prototype.toString.call(null)) // [object Null]
console.log(Object.prototype.toString.call(new Function())) // [object Function]
console.log(Object.prototype.toString.call(new Date())) // [object Date]
console.log(Object.prototype.toString.call([])) // [object Array]
console.log(Object.prototype.toString.call(new RegExp())) // [object RegExp]
console.log(Object.prototype.toString.call(new Error())) // [object Error]
console.log(Object.prototype.toString.call(document)) // [object HTMLDocument]
console.log(Object.prototype.toString.call(window)) //[object global] window 是全局对象 global 的引用
```
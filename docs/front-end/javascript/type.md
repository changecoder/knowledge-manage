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
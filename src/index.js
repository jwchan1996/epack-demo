// 刻意采用的是 require 来导包 （ webpack 可以支持不同模块类型实现）
require('./a.js')
require('./log/b.js')

console.log('index.js执行了')
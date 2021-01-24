学习笔记
浏览器工作原理
1.有限状态机 
每一个状态都是一个机器
每一个机器里，我们都可以做计算，存储，输出等
所有的这些机器接受的输入是一样的
状态机的每一个机器本身没有没有状态，如果我们要用函数来表示的话，应该是纯函数
每一个机器都知道下一个状态
每个机器都有确定的下一状态(Moore)
每一机器都根据输入决定下一个状态(Mealy)
2.JS中的有限状态机
//每个函数都是一个状态
function state(inpute) //函数参数就是输入
{
//在函数中，可以自由编写代码，处理没有状态的逻辑
return next; //返回值作为下一个状态
}

函数调用：
while(input){
//获取输入
state = state(input); //把状态机的返回值作为下一个状态
}

3.http的协议解析
tcp/IP
TCP层传输数据的概念为流
require('net')
   http
request和response相对应

4.第一步： Http请求
设计一个HTTP请求的类
content type 是一个必要的字段，要有默认值
body是KV格式
不同的content-type影响body的格式

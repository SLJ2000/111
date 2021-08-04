// 1.加载http核心模块
var http = require('http')
// 2.使用http.createServer()方法创建一个Web服务器
// 返回一个Server实例
var server = http.createServer()

// 3.服务器作用
    // 接收请求-处理请求-反馈（发送响应）-c注册request请求事件-当客户
// 端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数：回调处理函数
// request请求与对象，response响应对象
    server.on('request',function(request,response){
        console.log('收到请求,请求路径是：'+request.url)
        response.write('hello,node.js')
        response.end()
        })
        // response对象有一个方法：write可以用来给客户端发送数据，用end结束

// 4.绑定端口号-启动服务器
server.listen(5000,function(){
    console.log('服务器启动成功,http://localhost:5000')
}) 
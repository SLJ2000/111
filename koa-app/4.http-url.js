var http = require('http')

var server = http.createServer()
    server.on('request',function(request,response){
        console.log('收到请求')
        var url= request.url

// 判断
        if(url == '/'){
            response.end('这是index界面')
        }
        else if(url == '/login'){
            response.end('login界面')
        }
        else{
            response.end('WDNMD')
        }
    })


server.listen(5000,function(){
    console.log('服务器启动成功,http://localhost:5000')
}) 
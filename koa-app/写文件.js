var fs = require('fs')
fs.writeFile('./helli.txt','WDNMD，PDD',function(error){
    if(error){
        console.log('错误',error)
    }
    else{
        console.log('文件写入成功')
    }
    
})
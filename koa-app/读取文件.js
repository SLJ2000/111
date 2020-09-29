var fs = require('fs')
fs.readFile('./helli.txt',function(error,data){
    if(error){
        console.log('错1误',error)
    }
    else{
        console.log(data.toString())
    }
})
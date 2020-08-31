// react js & Angular - import from 'react' -- ES6 Module Loaders
// node js & express js - common js module loader

const http = require('http')
const port = 3030
const server = http.createServer(function(req, res){
    if(req.url == '/'){
        res.end('welcome to first node server website')
    }
    else if(req.url == '/users'){
        const users = [
            {id:1, name:'muhammed'},
            {id:2, name:'roshan'}
        ]
        res.end(JSON.stringify(users))
    }
    else{
        res.end('404 ERROR')
    }
})

server.listen(port, function(){
    console.log('listening on port', port )
})
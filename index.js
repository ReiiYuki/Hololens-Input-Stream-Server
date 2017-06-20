let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http)

io.on('connection', (socket)=>{
  console.log('a user connected')
})

http.listen(4000,()=>{
  console.log('Listening on 4000')
})

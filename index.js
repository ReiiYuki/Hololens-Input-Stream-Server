// Initialzie
let app = require('express')()
let PORT = process.env.PORT || 4000;
let cors = require('cors');

app.use(cors());
let server = app.listen(PORT,()=> {
  console.log('Start Server at PORT '+PORT);
})

let io = require('socket.io').listen(server)

io.on('connection',(socket)=>{

  socket.on('identify',(res)=>{
    socket.type = res.type
  })

})

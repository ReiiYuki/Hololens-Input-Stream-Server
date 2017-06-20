// Initialzie
let app = require('express')()
let PORT = process.env.PORT || 4000;
let cors = require('cors');

app.use(cors());

let devices = []

let server = app.listen(PORT,()=> {
  console.log('Start Server at PORT '+PORT);
})

let io = require('socket.io').listen(server)

io.on('connection',(socket)=>{

  devices.push(socket)

  socket.on('identify',(res)=>{
    socket.type = res.type
    socket.emit('identifySuccess')
  })

  socket.on('updateLeftHandPosition',(res)=>{
    console.log(res);
    console.log(devices.find((device)=>(device.type=="Holo")))
  })

  socket.on('updateRightHandPosition',(res)=>{
    console.log(res);
  })

  socket.on('updateCurrentGesture',(res)=>{
    console.log(res)
  })

  socket.on('disconnect',()=>{
    devices.splice(devices.indexOf(socket),1)
  })
})

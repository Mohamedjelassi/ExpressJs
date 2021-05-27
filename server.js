const express = require('express');

const app = express();

const time = require('./middleware/logger')

app.use(time)


const port = 5000

app.listen(port,time,()=>{
    console.log(`the server is running on port ${port}`)
});

// app.get('/html', (req,res) =>{ 
//     console.log(req); res.sendFile(__dirname+'/public/html.html')
// })



// http://localhost:5000/html.html


app.use(express.static(__dirname+'/public'))





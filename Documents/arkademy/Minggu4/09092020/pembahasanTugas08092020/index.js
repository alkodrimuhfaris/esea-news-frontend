const express = require ('express');
const app = express();

const path = require('path');

app.use(express.static('public'));

//memanggil library
let bodyParser = require('body-parser'); 
const { send } = require("process");
//menggunakan library pada express
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.get('/home', (req, res)=>{
    res.send('welcome to my first backend')
})

// app.post('/profile',(req, res)=>{
//     const {email, password} = req.body;
//     if(email==='admin@gmail.com'&&password==='123'){
//         res.send('success!')
//     }else{
//         res.send('worng username and password!')
//     }
// })

app.post('/data',(req, res)=>{
    console.log(req.body)
    res.send('OK')
})


app.post('/profile', (req, res)=>{
    res.send(req.body)
})

let data = {
    name : 'Jane',
    batch : '17,2',
    email : 'janedoe@gmail.com'
}

app.patch('/profile', (req, res)=>{
    const result = {
        ...data,
        ...req.body
    }
    res.send(result)
})

app.put('/profile', (req,res)=>{
    try{
        const {name, batch, email} = req.body;
        const result ={
            ...data,
            ...req.body
        }
        res.send(result);
    }catch(e){
        res.send({
            success: false,
            message: e.message
        });
    }
})

app.get('/profile', (req, res)=>{
    res.send(data)
})

app.delete('/profile', (req, res)=>{
    data = null
    res.send(data)
})


app.listen(8080)
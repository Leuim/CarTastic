const dotenv = require('dotenv');
dotenv.config()
const express = require('express')
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path')
const PORT = 3000
const app = express()

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected',()=>{
    console.log(`Connceted to: ${mongoose.connection.name}`);
})

// use
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public')));
app.get('/',async (req,res)=>{
    res.render('index.ejs')
})

//Controller
const carCtrl = require('./controllers/cars')
app.use('/', carCtrl)


app.listen(PORT,() =>{
    console.log(`Listening on PORT: ${PORT}`);
})
const Car = require('../models/car');
const router = require('express').Router()

router.post('/cars', async (req,res)=>{
    if (req.body.manufacturedate) {
        req.body.manufacturedate = new Date(req.body.manufacturedate);
      }
    await Car.create(req.body)
    res.redirect('/cars') 
})

router.get('/cars/new', async (req,res)=>{
    res.render('cars/new.ejs')
})

router.get('/cars', async (req,res)=>{
    const cars = await Car.find()
    res.render('cars/index.ejs',{cars})
})

router.get('/cars/:carId', async (req,res)=>{
    const car = await Car.findById(req.params.carId)
    res.render('cars/show.ejs',{car})
})

router.get('/cars/:carId/edit', async (req,res)=>{
    const car = await Car.findById(req.params.carId)
    res.render('cars/edit.ejs',{car})
})

router.delete('/cars/:carId', async (req,res)=>{
    await Car.findByIdAndDelete(req.params.carId)
    res.redirect('/cars')
})

router.put('/cars/:carId', async (req,res)=>{
    if (req.body.manufacturedate) {
        req.body.manufacturedate = new Date(req.body.manufacturedate);
      }
      await Car.findByIdAndUpdate(req.params.carId, req.body)
      res.redirect(`/cars/${req.params.carId}`)
})
module.exports = router
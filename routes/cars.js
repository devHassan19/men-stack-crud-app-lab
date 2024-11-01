const express = require('express')
const route = express.Router()
const carsController = require('../controllers/cars')

route.get('/cars/new', carsController.newCar)
route.post('/cars', carsController.create)
route.get('/cars', carsController.index)
route.get('/cars/:id', carsController.show)
route.delete('/cars/:id', carsController.delete)
route.get('/cars/:id/edit', carsController.edit)
route.put('/cars/:id', carsController.update)

module.exports = route

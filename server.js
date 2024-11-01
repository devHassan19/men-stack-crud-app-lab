require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const morgan = require('morgan')
const carRoute = require('./routes/cars')
const app = express()
const PORT = process.env.PORT
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.use(carRoute)

app.get('/', async (req, res) => {
  res.render('index.ejs')
})

app.get('/cars/new', (req, res) => {
  res.render('cars/new.ejs')
})

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`)
})

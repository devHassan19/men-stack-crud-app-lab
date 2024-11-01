const Cars = require('../models/cars')
const newCar = (req, res) => {
  res.render('cars/new.ejs')
}

const create = async (req, res) => {
  await Cars.create(req.body)
  res.redirect('/cars/new')
}

const index = async (req, res) => {
  const cars = await Cars.find()
  res.render('cars/index.ejs', { cars })
}

const show = async (req, res) => {
  const id = req.params.id
  const car = await Cars.findById(id)
  res.render('cars/show.ejs', { car })
}

const deleteCar = async (req, res) => {
  const id = req.params.id
  await Cars.findByIdAndDelete(id)
  res.redirect('/cars')
}

const edit = async (req, res) => {
  const id = req.params.id
  const car = await Cars.findById(id)
  res.render('cars/edit.ejs', { car })
}

const update = async (req, res) => {
  const id = req.params.id
  await Cars.findByIdAndUpdate(id, req.body)
  res.redirect(`/cars/${id}`)
}
module.exports = {
  newCar,
  create,
  index,
  show,
  delete: deleteCar,
  edit,
  update
}

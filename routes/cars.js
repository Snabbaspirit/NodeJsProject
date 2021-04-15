const {Router} = require('express');
const Car = require('../models/carModel');
const router = Router();

router.get('/', async (req, res) => {
  const cars = await Car.getAll();
  res.render('cars', {
    title: 'Cars page',
    isCar: true,
    cars,
  });
});

router.get('/:id', async (req, res) => {
  const car = await Car.getSingle(req.params.id)
  res.render('car', {
    layout: 'empty',
    title: `Auto ${car.title}`,
    car
  });
})

module.exports = router;

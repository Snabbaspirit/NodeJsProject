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

router.post('/edit', async (req, res) => {
  await Car.update(req.body)
  res.redirect('/cars')
})

router.get('/:id/edit', async (req, res) => {
  if (!req.query.allow) {
    return  res.redirect('/')
  }
  const car = await Car.getSingle(req.params.id)
  res.render('car-edit', {
    title: `Edit ${car.model}`,
    car
  })
})

router.get('/:id', async (req, res) => {
  const car = await Car.getSingle(req.params.id)
  res.render('car', {
    layout: 'empty',
    title: `Auto ${car.title}`,
    car
  });
})

module.exports = router;

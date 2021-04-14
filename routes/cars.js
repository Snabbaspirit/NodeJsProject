const {Router} = require('express');
const Car = require('../models/car');
const router = Router();

router.get('/', async (req, res) => {
  const cars = await Car.getAll();
  res.render('cars', {
    title: 'Cars page',
    isCar: true,
    cars,
  });
});

module.exports = router;

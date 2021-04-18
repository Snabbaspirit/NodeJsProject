const {Router} = require('express');
const {Basket} = require('../models/basketModel');
const Car = require('../models/carModel')
const router = Router();

router.post('/add', async (req, res) => {
  const car = await Car.getSingle(req.body.id);
  await Basket.add(car);
  res.redirect('/basket');
});


router.delete('/remove/:id', async (req, res) => {
  const removeItem = await Basket.remove(req.params.id);
  res.status(200).json(removeItem);
})

router.get('/', async (req, res) => {
const basket = await Basket.fetch();
res.render('basket', {
  title: 'Basket',
  isBasket: true,
  cars: basket.cars,
  price: basket.price
})
})

module.exports = router;

const {Router} = require('express');
const Basket = require('../models/basketModel');
const Car = require('../models/carModel')
const router = Router();

router.post('/add', async (req, res) => {
  const car = await Car.getSingle(req.body.id);
  await Basket.add();
  res.redirect('/basket');
});

router.get('/', async (req, res) => {
const basket = await Basket.fetch();
res.render('basket', {
  title: 'Basket',
  basket
})
})

module.exports = router;

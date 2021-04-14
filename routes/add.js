const {Router} = require('express');
const Car = require('../models/car');
const router = Router();

router.get('/', (req, res) => {
  res.render('add', {
    title: 'Add car page',
    isAdd: true,
  });
});

router.post('/', async (req, res) => {
  const car = new Car(req.body.model, req.body.price, req.body.img);
  await car.save();

  res.redirect('/cars');
})

module.exports = router;

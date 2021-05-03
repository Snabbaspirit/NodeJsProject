const {Router} = require('express');
const Car = require('../models/carModel');
const router = Router();

router.get('/', (req, res) => {
  res.render('add', {
    title: 'Add car page',
    isAdd: true,
  });
});

router.post('/', async (req, res) => {
  const car = new Car({
    model: req.body.model,
    price: req.body.price,
    img: req.body.img
  })

  try {
    await car.save();
    res.redirect('/cars');
  } catch(e) {console.log('e', e)}
})

module.exports = router;

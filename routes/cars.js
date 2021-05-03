const {Router} = require('express');
const Car = require('../models/carModel');
const router = Router();

router.get('/', async (req, res) => {
  const cars = await Car.find();
  res.render('cars', {
    title: 'Cars page',
    isCar: true,
    cars,
  });
});

router.get('/:id/edit', async (req, res) => {
  if (!req.query.allow) {
    return  res.redirect('/')
  }

  const car = await Car.findById(req.params.id)

  res.render('car-edit', {
    title: `Edit ${car.model}`,
    car
  })
})

router.post('/edit', async (req, res) => {
  try {
    const {id} = req.body;
    delete req.body.id;
    await Car.findByIdAndUpdate(id, req.body)
    res.redirect('/cars')
  } catch (e) {
    console.log(e)
  }
})

router.post('/remove', async (req, res) => {
  try {
    await Car.deleteOne({
      _id: req.body.id
    })
    res.redirect('/cars')
  } catch(e) {
    console.log(e)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const car = await Car.findById(req.params.id)
    res.render('car', {
      layout: 'empty',
      title: `Auto ${car.model}`,
      car
    });
  }
  catch (e) {
    console.log(e)
  }
})

module.exports = router;

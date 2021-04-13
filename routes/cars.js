const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('cars', {
    title: 'Cars page',
    isCar: true,
  });
});

module.exports = router;

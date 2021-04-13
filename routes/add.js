const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('add', {
    title: 'Add car page',
    isAdd: true,
  });
});

router.post('/', (req, res) => {
  console.log('req body', req.body);

  res.redirect('/cars');
})

module.exports = router;

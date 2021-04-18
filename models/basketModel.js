const path = require('path');
const fs = require('fs');

const p = path.join(
  path.dirname(require.main.filename),
  'data',
  'basket.json'
)
class Basket {
  static async add(car) {
    const basket = await Basket.fetch();

    const idx = basket.cars.findIndex(el => el.id === car.id)
    const candidate = basket.cars[idx];
    console.log('car', car);
    if (candidate) {
      candidate.count++
      basket.cars[idx] = candidate
    } else {
      car.count = 1
      basket.cars.push(car)
    }

    basket.price += +car.price

    return new Promise((res, rej) => {
      fs.writeFile(p, JSON.stringify(basket), err => {
        if (err) rej();
        res()
      })
    })
  }

  static async fetch() {
    return new Promise((res, rej) => {
      fs.readFile(p, 'utf-8', (err, content) => {
        if (err) {
          rej(err)
        }
        return res(JSON.parse(content))
      })
    })
  }
}

module.exports = {
  Basket,

};

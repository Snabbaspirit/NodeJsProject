const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

class Car {
  constructor(model, price, img) {
    this.model = model;
    this.price = price;
    this.img = img;
    this.id = uuidv4();
  }

  toJSON() {
    return {
      model: this.model,
      price: this.price,
      img: this.img,
      id: this.id,
    }
  }

  static async update(data) {
    const car = await Car.getAll();
    const idx = car.findIndex(el => el.id === data.id);
    car[idx] = data;
    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'data', 'cars.json'),
        JSON.stringify(car),
        (err) => {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        }
      )
    })
  }

  async save() {
    const car = await Car.getAll();
    car.push(this.toJSON());

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'data', 'cars.json'),
        JSON.stringify(car),
        (err) => {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        }
      )
    })
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, '..', 'data', 'cars.json'),
        'utf-8',
        (err, content) => {
          if (err) {
            reject(err)
          } else {
            resolve(JSON.parse(content))
          }
        }
      )
    })
  }

  static async getSingle(id) {
    const cars = await Car.getAll();
    return cars.find(el => el.id === id)
  }
}

module.exports = Car;

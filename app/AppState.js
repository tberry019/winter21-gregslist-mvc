import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"

import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({ make: 'ford', model: 'focus', year: 2008, price: 7500, description: 'Like new only 100,000 miles', color: '#91e880', imgUrl: 'https://i.pinimg.com/originals/c1/d1/a8/c1d1a890282f877de2ef09cd53131cdb.jpg' }),
    new Car({ make: 'ford', model: 'taurus wagon', year: 1989, price: 1000, description: 'Great Family vehicle for long vacations', color: '#93776a', imgUrl: 'https://cdn.motor1.com/images/mgl/xWqly/s3/home-built-christmas-vacation-display-includes-movie-s-epic-vehicles.jpg' }),
    new Car({ make: 'Elven', model: 'Sleigh', year: 1700, price: 900000, description: 'It only works once a year, and has 8 horsepower', color: '#f44545', imgUrl: 'https://cdn.shopify.com/s/files/1/1319/9267/products/metal-sleigh_1_1024x1024.jpg' })
  ]
  /** @type {import('./Models/House').House[]} */
  houses = [
    new House({ bedrooms: 3, bathrooms: 3, year: 2008, price: 550000, description: 'Comes with Live, Laugh, Love sign probably.', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrI_oeeSIzahDCnAa0IsZRgpsGmB0gEXmKRA&usqp=CAU' }),
    new House({ bedrooms: 2, bathrooms: 1, year: 1989, price: 225000, description: 'Great home to stay off the grid.', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTprLt-wKpCbm7YQG0pPhxt98vfWyK6DAHscQ&usqp=CAU' }),
    new House({ bedrooms: 4, bathrooms: 3, year: 2020, price: 900000, description: 'This H.O.A is a pain in the A.S.S.', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP22dJS0LeT4p79r1IQdqaTY-TcOiPt9jwkg&usqp=CAU' })


  ]

  jobs = [
    new Job({ time: 'full', location: 'Boise', pay: 100000, description: 'Come be a Lawyer!', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8rUScM744ugwukjA66-03nyXR0o1bd7bHQA&usqp=CAU' })
  ]

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

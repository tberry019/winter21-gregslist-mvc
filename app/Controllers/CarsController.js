import { ProxyState } from "../AppState.js"
import { getCarform } from "../Component/CarForm.js"
import { carsService } from "../Services/CarsService.js"

function _drawCars() {
  const cars = ProxyState.cars
  let template = ''
  cars.forEach(c => template += c.Template)
  document.getElementById('listings').innerHTML = template
}

export class CarsController {
  constructor() {
    ProxyState.on('cars', _drawCars)
  }
  drawCars() {
    _drawCars()
    document.getElementById('modal-body-slot').innerHTML = getCarform()
  }

  createCar() {
    // prevents page reload
    window.event.preventDefault()
    console.log("submitted")
    /** @type {HTMLFormElement} */
    // @ts-ignore
    const form = window.event.target
    const carData = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      price: form.price.value,
      color: form.color.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    carsService.createCar(carData)
    // clear form
    form.reset()
    // close modal
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).hide()
  }

  removeCar(id) {
    console.log('deleting', id)
    carsService.removeCar(id)
  }
}
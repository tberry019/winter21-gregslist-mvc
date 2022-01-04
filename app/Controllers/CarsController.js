import { ProxyState } from "../AppState.js"
import { getCarform } from "../Component/CarForm.js"
import { confirmation, toast } from "../Services/AlertService.js"
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
    carsService.getAllCars()
  }
  drawCars() {
    _drawCars()
    document.getElementById('modal-body-slot').innerHTML = getCarform()
  }

  async createCar(id) {
    try {
      // NOTE this is the code we want to execute or TRY to execute
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
      if (id == "undefined") {
        await carsService.createCar(carData)
      } else {
        await carsService.editCar(carData, id)
      }
      // clear form
      form.reset()
      // close modal
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).hide()
    } catch (error) {
      // NOTE if the above TRY fails, this will catch the error and then we can display to user and to the console
      toast(error.message)
      console.log(error.message)
    }
  }

  async removeCar(id) {
    try {
      const foundCar = ProxyState.cars.find(c => c.id == id)
      console.log('found car for delete', foundCar)
      if (await confirmation(`Are you sure you want to delete ${foundCar.model}?`)) {
        await carsService.removeCar(id)
        toast(`${foundCar.model} was removed!`)
      }
    } catch (error) {
      toast(error.message)
      console.log(error.message)
    }
  }

  async editCar(id) {
    try {
      // NOTE find the car we are going to edit locally first
      let foundCar = ProxyState.cars.find(c => c.id == id)

      // NOTE grab modal that exists in html, and toggle it
      bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).toggle()

      document.getElementById('modal-body-slot').innerHTML = getCarform(foundCar)

      console.log('found car in edit', foundCar)

    } catch (error) {
      toast(error.message)
      console.log(error.message)
    }
  }
}
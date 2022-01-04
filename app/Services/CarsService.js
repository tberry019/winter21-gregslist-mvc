import { ProxyState } from "../AppState.js"
import { Car } from "../Models/Car.js"
import { api } from "./AxiosService.js"

class CarsService {

  async getAllCars() {
    const res = await api.get('cars')
    // NOTE ALWAYS ALWAYS ALWAYS CHECK THE DATA YOU ARE ITERATING OVER BEFORE ITERATING 
    console.log('get all cars res data', res.data)
    ProxyState.cars = res.data.map(c => new Car(c))
    console.log('cars in proxy', ProxyState.cars)
  }
  async removeCar(id) {
    const res = await api.delete(`cars/${id}`)
    console.log('delete car res', res)
    // this.getAllCars()
    // REVIEW this way is not ideal^^^^^^^ DO IT LOCALLY
    ProxyState.cars = ProxyState.cars.filter(c => c.id !== id)
    // NOTE this is good^^^
  }
  async createCar(carData) {
    // NOTE what you put after the comma is the data that we are giving to the server to post into the database
    const res = await api.post('cars', carData)
    console.log('post car res', res.data)
    ProxyState.cars = [new Car(res.data), ...ProxyState.cars]
  }

  async editCar(carData, id) {
    const res = await api.put(`cars/${id}`, carData)
    // NOTE finding the index of the car we just edited
    let editedCarIndex = ProxyState.cars.findIndex(c => c.id == id)
    // NOTE using the index of the car we are going to edit, removing only that one index, and replacing it with the newly edited car 
    ProxyState.cars.splice(editedCarIndex, 1, new Car(res.data))
    ProxyState.cars = ProxyState.cars
  }

}

export const carsService = new CarsService()
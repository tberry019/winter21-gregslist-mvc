import { ProxyState } from "../AppState.js"
import { Car } from "../Models/Car.js"

class CarsService {
  removeCar(id) {
    // const car = ProxyState.cars.find(c => c.id === id)
    // if(car){
    // }  
    ProxyState.cars = ProxyState.cars.filter(c => c.id !== id)
  }
  createCar(carData) {
    const car = new Car(carData)
    // ProxyState.cars.push(car)
    // ProxyState.cars = ProxyState.cars
    ProxyState.cars = [...ProxyState.cars, car]
  }

}

export const carsService = new CarsService()
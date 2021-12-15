import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"



class HousesService {
  removeHouse(id) {
    // const car = ProxyState.cars.find(c => c.id === id)
    // if(car){
    // }  
    ProxyState.houses = ProxyState.houses.filter(h => h.id !== id)
  }
  createHouse(houseData) {
    const house = new House(houseData)
    // ProxyState.cars.push(car)
    // ProxyState.cars = ProxyState.cars
    ProxyState.houses = [...ProxyState.houses, house]
  }
}

export const housesService = new HousesService()
import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"
import { api } from "./AxiosService.js"



class HousesService {
  async getAllHouses() {
    const res = await api.get('houses')
    // NOTE ALWAYS ALWAYS ALWAYS CHECK THE DATA YOU ARE ITERATING OVER BEFORE ITERATING 
    console.log('get all houses res data', res.data)
    ProxyState.houses = res.data.map(h => new House(h))
    console.log('houses in proxy', ProxyState.houses)
  }
  async removeHouse(id) {
    const res = await api.delete(`houses/${id}`)
    console.log('delete house res', res)
    ProxyState.houses = ProxyState.houses.filter(h => h.id !== id)

  }
  async createHouse(houseData) {
    const res = await api.post('houses', houseData)
    console.log('post house res', res.data)
    ProxyState.houses = [new House(res.data), ...ProxyState.houses]


  }
  async editHouse(houseData, id) {
    const res = await api.put(`houses/${id}`, houseData)
    let editedHouseIndex = ProxyState.houses.findIndex(h => h.id == id)
    ProxyState.houses.splice(editedHouseIndex, 1, new House(res.data))
    ProxyState.houses = ProxyState.houses
  }

}

export const housesService = new HousesService()
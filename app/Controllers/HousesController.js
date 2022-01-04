import { ProxyState } from "../AppState.js";
import { getHouseform } from "../Component/Houseform.js"
import { housesService } from "../Services/HousesService.js"
import { confirmation, toast } from "../Services/AlertService.js"

function _drawHouses() {
  const houses = ProxyState.houses
  let template = ''
  houses.forEach(h => template += h.Template)
  document.getElementById('listings').innerHTML = template
}
export class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
    housesService.getAllHouses()
  }


  drawHouses() {
    _drawHouses()
    document.getElementById('modal-body-slot').innerHTML = getHouseform()

  }
  async createHouse(id) {
    try {
      // prevents page reload
      window.event.preventDefault()
      console.log("submitted")
      /** @type {HTMLFormElement} */
      // @ts-ignore
      const form = window.event.target
      const houseData = {
        bedrooms: form.bedrooms.value,
        bathrooms: form.bathrooms.value,
        year: form.year.value,
        price: form.price.value,
        levels: form.levels.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value

      }
      if (id == "undefined") {
        await housesService.createHouse(houseData)
      } else {
        await housesService.editHouse(houseData, id)
      }

      // clear form
      form.reset()
      // close modal
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).hide()
    } catch (error) {
      toast(error.message)
      console.log(error.message)
    }
  }

  async removeHouse(id) {
    try {
      const foundHouse = ProxyState.houses.find(h => h.id == id)
      console.log('found house for delete', foundHouse)
      if (await confirmation(`Are you sure you want to delete ${foundHouse.description}?`)) {
        await housesService.removeHouse(id)
        toast(`${foundHouse.model} was removed!`)
      }

    } catch (error) {
      toast(error.message)
      console.log(error.message)
    }
  }

  async editHouse(id) {
    try {
      let foundHouse = ProxyState.houses.find(h => h.id == id)
      bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).toggle()
      document.getElementById('modal-body-slot').innerHTML = getHouseform(foundHouse)
      console.log('found house in edit', foundHouse)
    }
    catch (error) {
      toast(error.message)
      console.log(error.message)
    }
  }

}


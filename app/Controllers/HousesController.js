import { ProxyState } from "../AppState.js";
import { getHouseform } from "../Component/Houseform.js"
import { housesService } from "../Services/HousesService.js"

function _drawHouses() {
  const houses = ProxyState.houses
  let template = ''
  houses.forEach(h => template += h.Template)
  document.getElementById('listings').innerHTML = template
}
export class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
  }


  drawHouses() {
    _drawHouses()
    document.getElementById('modal-body-slot').innerHTML = getHouseform()

  }
  createHouse() {
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
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    housesService.createHouse(houseData)
    // clear form
    form.reset()
    // close modal
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).hide()
  }

  removeHouse(id) {
    console.log('deleting', id)
    housesService.removeHouse(id)
  }


}


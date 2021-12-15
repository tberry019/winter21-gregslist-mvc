import { ProxyState } from "../AppState.js";
import { getHouseform } from "../Component/Houseform.js"


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


}


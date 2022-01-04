// import { generateId } from "../Utils/generateId.js";

export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms || ''
    this.bathrooms = data.bathrooms || ''
    this.year = data.year || 0
    this.price = data.price || 0
    this.description = data.description || ''
    this.imgUrl = data.imgUrl || ''
  }
  get Template() {
    return `
    <div class="col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <img class="w-100 rounded-top" src="${this.imgUrl}" alt="house image-image">
        <div class="p-3">
          <p class="text-center uppercase"><b>${this.bedrooms} Bed - ${this.bathrooms} Bath - Built ${this.year}</b></p>
          <p class="m-0">${this.description}</p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
          <p class="m-0">$${this.price}</p>
          <div class="d-flex align-items-center">
          </div>
          <i class="mdi mdi-pencil selectable" onclick="app.housesController.editHouse('${this.id}')"></i>
          <i class="mdi mdi-delete selectable" onclick="app.housesController.removeHouse('${this.id}')"></i>
        </div>
      </div>
    </div>`
  }



}
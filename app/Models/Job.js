import { generateId } from "../Utils/generateId.js";

export class Job {
  constructor(data) {
    this.id = generateId()
    this.time = data.time
    this.location = data.location
    this.pay = data.pay
    this.description = data.description
    this.imgUrl = data.imgUrl
  }
  get Template() {
    return `
    <div class="col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <img class="w-100 rounded-top" src="${this.imgUrl}" alt="laywer image">
        <div class="p-3">
          <p class="text-center uppercase"><b>${this.time} Time  - location, ${this.location}  - salary $${this.pay} per year.</b></p>
          <p class="m-0">${this.description}</p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
          </div>
          <i class="mdi mdi-delete selectable" onclick="app.jobsController.removeJob('${this.id}')"></i>
        </div>
      </div>
    </div>`
  }



}
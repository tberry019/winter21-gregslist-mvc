import { House } from "../Models/House.js"


export function getHouseform(houseData = {}) {
  const newHouse = new House(houseData)
  console.log('house data in house form!', newHouse)

  return /*html*/`
  <form onsubmit="app.housesController.createHouse('${newHouse.id}')">
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="bedroom" class="form-label">Bedrooms</label>
        <input type="text" class="form-control" name="bedrooms" id="bedrooms" aria-describedby="bedrooms"
          placeholder="Bedrooms..." value="${newHouse.bedrooms}" required>
      </div>
      <div>
        <label for="bathroom" class="form-label">Bathrooms</label>
        <input type="text" class="form-control" name="bathrooms" id="bathrooms" aria-describedby="bathroom"
          placeholder="Bathrooms..." value="${newHouse.bathrooms}" required>
      </div>
    </div>
    <div class="mb-3 d-flex justify-content-between">
     <div>
        <label for="year" class="form-label">Year Built</label>
        <input type="text" class="form-control" name="year" id="year" aria-describedby="year"
          placeholder="Year Built..." value="${newHouse.year}" required>
      </div>
    </div>
    <div class="mb-3">
    <div>
        <label for="price" class="form-label">Price $</label>
        <input type="text" class="form-control" name="price" id="price" aria-describedby="price"
          placeholder="Price $..." value="${newHouse.price}" required>
      </div>
    </div>
    <div class="mb-3">
      <label for="imgUrl" class="form-label">Image Url</label>
      <input type="url" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="imgUrl"
        placeholder="Image Url..." value="${newHouse.imgUrl}" required>
    </div>
    <div>
      <label for="description" class="form-label">Description</label>
      <textarea type="text" class="form-control" name="description" id="description"
        aria-describedby="description" placeholder="description..." min="5" max="250"required>${newHouse.description} </textarea>
    </div>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-primary">${newHouse.id ? 'Edit' : 'Create'}</button>
  </div>
  </form>
`
}
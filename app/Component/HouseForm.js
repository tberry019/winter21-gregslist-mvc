export function getHouseform() {
  return `
  <form onsubmit="app.housesController.createHouse()">
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="bedroom" class="form-label">Bedroom</label>
        <input type="text" class="form-control" name="bedrooms" id="bedrooms" aria-describedby="bedroom"
          placeholder="Bedroom..." required>
      </div>
      <div>
        <label for="bathroom" class="form-label">Bathroom</label>
        <input type="text" class="form-control" name="bathrooms" id="bathrooms" aria-describedby="bathroom"
          placeholder="Bathroom..." required>
      </div>
    </div>
    <div class="mb-3 d-flex justify-content-between">
     <div>
        <label for="year" class="form-label">Year Built</label>
        <input type="text" class="form-control" name="year" id="year" aria-describedby="year"
          placeholder="Year Built..." required>
      </div>
    </div>
    <div class="mb-3">
    <div>
        <label for="price" class="form-label">Price $</label>
        <input type="text" class="form-control" name="price" id="price" aria-describedby="price"
          placeholder="Price $..." required>
      </div>
    </div>
    <div class="mb-3">
      <label for="imgUrl" class="form-label">Image Url</label>
      <input type="url" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="imgUrl"
        placeholder="Image Url..." required>
    </div>
    <div>
      <label for="description" class="form-label">Description</label>
      <textarea type="text" class="form-control" name="description" id="description"
        aria-describedby="description" placeholder="Description..." min="5" max="250" required> </textarea>
    </div>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-primary">Create</button>
  </div>
  </form>
`
}
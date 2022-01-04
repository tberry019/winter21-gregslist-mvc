export function getJobform() {
  return `
  <form onsubmit="app.jobsController.createJob()">
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="time" class="form-label">Time</label>
        <input type="text" class="form-control" name="time" id="times" aria-describedby="time"
          placeholder="Time..." required>
      </div>
      <div>
        <label for="location" class="form-label">Location</label>
        <input type="text" class="form-control" name="location" id="locations" aria-describedby="location"
          placeholder="Location..." required>
      </div>
    </div>
    <div class="mb-3 d-flex justify-content-between">
     <div>
        <label for="pay" class="form-label">Pay</label>
        <input type="text" class="form-control" name="pay" id="pay" aria-describedby="pay"
          placeholder="Pay..." required>
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
        aria-describedby="Description" placeholder="Description..." min="5" max="250" required> </textarea>
    </div>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-primary">Create</button>
  </div>
  </form>
`
}
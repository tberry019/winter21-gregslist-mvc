export function getJobform() {
  return `
  <form onsubmit="app.housesController.createHouse()">
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="time" class="form-label">Time</label>
        <input type="text" class="form-control" name="time" id="time" aria-describedby="time"
          placeholder="Time..." required>
      </div>
      <div>
        <label for="location" class="form-label">location</label>
        <input type="text" class="form-control" name="location" id="location" aria-describedby="location"
          placeholder="location..." required>
      </div>
    </div>
  </form>
`
}
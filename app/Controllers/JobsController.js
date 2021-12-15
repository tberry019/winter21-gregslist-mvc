import { ProxyState } from "../AppState.js";
import { getJobform } from "../Component/Jobform.js"
import { jobsService } from "../Services/JobsService.js"


function _drawJobs() {
  const jobs = ProxyState.jobs
  let template = ''
  jobs.forEach(j => template += j.Template)
  document.getElementById('listings').innerHTML = template
}
export class JobsController {
  constructor() {
    ProxyState.on('jobs', _drawJobs)
  }
  drawJobs() {
    _drawJobs()
    document.getElementById('modal-body-slot').innerHTML = getJobform()

  }
  createJob() {
    // prevents page reload
    window.event.preventDefault()
    console.log("submitted")
    /** @type {HTMLFormElement} */
    // @ts-ignore
    const form = window.event.target
    const jobData = {
      time: form.time.value,
      location: form.locatioin.value,
      pay: form.pay.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    jobsService.createHouse(jobData)
    // clear form
    form.reset()
    // close modal
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(document.getElementById('new-listing')).hide()
  }

  removeJob(id) {
    console.log('deleting', id)
    housesService.removeJob(id)
  }






}

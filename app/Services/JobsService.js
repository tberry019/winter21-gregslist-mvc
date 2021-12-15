import { ProxyState } from "../AppState.js"
import { Job } from "../Models/Job.js"



class JobsService {
  removeJob(id) {
    // const car = ProxyState.cars.find(c => c.id === id)
    // if(car){
    // }  
    ProxyState.jobs = ProxyState.jobs.filter(j => j.id !== id)
  }
  createJob(jobData) {
    const job = new Job(jobData)
    // ProxyState.cars.push(car)
    // ProxyState.cars = ProxyState.cars
    ProxyState.jobs = [...ProxyState.jobs, job]
  }
}

export const jobsService = new JobsService()
import { Job } from '../@types'
import { jobData } from './data/data'

export const getAllJobs = (): Job[] => {
  return jobData
}

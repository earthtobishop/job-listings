import { Job } from '../@types'
import { jobData } from './data/data'

const categoryList = [
  'Python',
  'Ruby',
  'JavaScript',
  'HTML',
  'CSS',
  'React',
  'Sass',
  'Vue',
  'Django',
  'RoR',
  'Ruby',
  'Frontend',
  'Backend',
  'Fullstack'
]

export const getAllJobs = (): Job[] => {
  return jobData
}

export const filterJobs = (categories: string[]): Job[] => {
  let jobs = getAllJobs()
  let filteredJobs: Job[] = []

  categories.forEach((filterValue) => {
    filteredJobs.push(
      ...jobs.filter(
        (j) =>
          j.languages.includes(filterValue) ||
          j.tools.includes(filterValue) ||
          j.role === filterValue
      )
    )
  })

  return filteredJobs
}

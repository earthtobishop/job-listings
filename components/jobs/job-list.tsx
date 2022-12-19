import React from 'react'
import { Job } from '../../@types'
import JobCard from '../job-detail/job-card'
import classes from './job-list.module.css'

interface JobListProps {
  jobs: Job[]
  setCategories: React.Dispatch<React.SetStateAction<string[]>>
}

function JobList({ jobs, setCategories }: JobListProps) {
  return (
    <div className={classes.jobList}>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} setCategories={setCategories} />
      ))}
    </div>
  )
}

export default JobList

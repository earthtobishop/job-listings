import React from 'react'
import { Job } from '../../@types'
import JobCard from '../job-detail/job-card'

interface JobListProps {
  jobs: Job[]
  setCategories: React.Dispatch<React.SetStateAction<string[]>>
}

function JobList({ jobs, setCategories }: JobListProps) {
  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} setCategories={setCategories} />
      ))}
    </div>
  )
}

export default JobList

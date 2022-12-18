import { Job } from '../../@types'
import JobCard from '../job-detail/job-card'

type JobListProps = {
  jobs: Job[]
}

function JobList({ jobs }: JobListProps) {
  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}

export default JobList

import React from 'react'
import { Job } from '../../@types'

type JobCardProps = {
  key: number
  job: Job
  setCategories: React.Dispatch<React.SetStateAction<string[]>>
}

const JobCard = ({ job }: JobCardProps) => {
  return <div>JobCard</div>
}

export default JobCard

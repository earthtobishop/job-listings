import { GetStaticProps } from 'next'
import { useState } from 'react'
import { Job } from '../@types'
import JobList from '../components/jobs/job-list'
import { getAllJobs } from '../lib/job-util'

interface HomePageProps {
  allJobs: Job[]
}

function HomePage({ allJobs }: HomePageProps) {
  const [jobs, setJobs] = useState(allJobs)
  const [categories, setCategories] = useState<string[]>([])

  return <JobList jobs={jobs} setCategories={setCategories} />
}

export const getStaticProps: GetStaticProps = async () => {
  const allJobs = getAllJobs()
  return {
    props: { allJobs }
  }
}

export default HomePage

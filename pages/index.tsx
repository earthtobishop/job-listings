import { GetStaticProps } from 'next'
import { useState } from 'react'
import { Job } from '../@types'
import { getAllJobs } from '../lib/job-util'

type HomePageProps = {
  allJobs: Job[]
}

function HomePage({ allJobs }: HomePageProps) {
  const [jobs, setJobs] = useState(allJobs)
  const [categories, setCategories] = useState([])

  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allJobs = getAllJobs()
  return {
    props: { allJobs }
  }
}

export default HomePage

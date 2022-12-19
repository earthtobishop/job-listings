import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import { Job } from '../@types'
import Hero from '../components/home-page/hero'
import JobFilter from '../components/jobs/job-filter/job-filter'
import JobList from '../components/jobs/job-list'
import { getAllJobs, filterJobs } from '../lib/job-util'

interface HomePageProps {
  allJobs: Job[]
}

function HomePage({ allJobs }: HomePageProps) {
  const [jobs, setJobs] = useState(allJobs)
  const [categories, setCategories] = useState<string[]>([])
  const multipleCategories = categories.length > 0

  useEffect(() => {
    if (categories.length === 0) {
      return setJobs(allJobs)
    }
    const filteredJobs = filterJobs(categories)
    const uniqueFilteredJobs = Array.from(new Set(filteredJobs))
    setJobs(uniqueFilteredJobs)
  }, [categories, allJobs])

  return (
    <>
      <Hero />
      {multipleCategories && (
        <JobFilter categories={categories} setCategories={setCategories} />
      )}
      <JobList jobs={jobs} setCategories={setCategories} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allJobs = getAllJobs()
  return {
    props: { allJobs }
  }
}

export default HomePage

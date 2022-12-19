/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Job } from '../../../@types'
import classes from './job-card.module.css'

type JobCardProps = {
  key: number
  job: Job
  setCategories: React.Dispatch<React.SetStateAction<string[]>>
}

const JobCard = ({ job, setCategories }: JobCardProps) => {
  const {
    company,
    logo,
    new: isNew,
    featured,
    contract,
    languages,
    level,
    location,
    position,
    postedAt,
    role,
    tools
  } = job

  const formattedImagePath = logo.slice(1)

  const handleSetCategory = (category: string) => {
    setCategories((prevState) => {
      if (!prevState.includes(category)) {
        return prevState.concat(category)
      }

      return prevState
    })
  }

  return (
    <div className={classes.jobCard}>
      <div className={classes.details}>
        <span className={classes.imageWrapper}>
          <img
            alt='company logo'
            src={formattedImagePath}
            height={88}
            width={88}
          />
        </span>
        <div className={classes.info}>
          <div className={classes.top}>
            <div className={classes.company}>{company}</div>
            {isNew && <div className={classes.status}>NEW!</div>}
            {featured && <div className={classes.featured}>FEATURED</div>}
          </div>
          <div className={classes.middle}>
            <div className={classes.position}>{position}</div>
          </div>

          <div className={classes.bottom}>
            <div>{postedAt}</div>
            <span className={classes.dot}></span>
            <div>{contract}</div>
            <span className={classes.dot}></span>
            <div>{location}</div>
          </div>
          <span className={classes.divider}></span>
        </div>
      </div>
      <div className={classes.tabs}>
        <div
          className={classes.roleTab}
          onClick={() => handleSetCategory(role)}
        >
          {role}
        </div>
        {tools.map((tool) => (
          <div
            className={classes.tab}
            key={tool}
            onClick={() => handleSetCategory(tool)}
          >
            {tool}
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobCard

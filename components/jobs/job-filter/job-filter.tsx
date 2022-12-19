import React from 'react'
import classes from './job-filter.module.css'

interface JobFilterProps {
  categories: string[]
  setCategories: React.Dispatch<React.SetStateAction<string[]>>
}

const JobFilter = ({ categories, setCategories }: JobFilterProps) => {
  const handleRemoveCategory = (category: string) => {
    setCategories(categories.filter((c) => c !== category))
  }

  const handleClearCategories = () => {
    setCategories([])
  }

  return (
    <div className={classes.filter}>
      <div className={classes.filterCard}>
        <div className={classes.categories}>
          {categories.map((category) => (
            <div
              key={category}
              className={classes.tab}
              onClick={() => handleRemoveCategory(category)}
            >
              <span>{category}</span>
              <span className={classes.imageWrapper}>
                <img src='/images/icon-remove.svg' alt='remove button' />
              </span>
            </div>
          ))}
        </div>
        <div className={classes.clearBtn} onClick={handleClearCategories}>
          Clear
        </div>
      </div>
    </div>
  )
}

export default JobFilter

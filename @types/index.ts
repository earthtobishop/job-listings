type Role = 'Frontend' | 'Backend' | 'Fullstack'
type Level = 'Junior' | 'Midweight' | 'Senior'
type Contract = 'Full Time' | 'Part Time' | 'Contract'
type Location = 'Worldwide' | 'USA Only' | 'UK Only' | 'Remote'

export interface Job {
  id: number
  company: string
  logo: string
  new: boolean
  featured: boolean
  position: string
  role: Role
  level: Level
  postedAt: string
  contract: Contract
  location: Location
  languages: string[]
  tools: string[]
}

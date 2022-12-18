type Role = 'Frontend' | 'Backend' | 'Fullstack'
type Level = 'Junior' | 'Midweight' | 'Senior'
type Language = 'Python' | 'Ruby' | 'JavaScript' | 'HTML' | 'CSS'
type Tool = 'React' | 'Sass' | 'Vue' | 'Django' | 'RoR' | 'Ruby'
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
  languages: Language[]
  tools: Tool[] | []
}

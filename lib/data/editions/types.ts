export type ChartDatum = {
  name: string
  value: number
}

export type Speaker = {
  name: string
  role: string
  institution: string
  image: string
  link?: string
  formacion?: string
}

export type CommitteeMember = {
  name: string
  image?: string
  role?: string
  affiliation?: string
}

export type CommitteeSubgroup = {
  university: string
  members: CommitteeMember[]
}

export type TimelineItem = {
  emoji: string
  title: string
  description: string
}

export type StatCard = {
  value: string
  label: string
}

export type GalleryItem = {
  type: "image" | "video"
  src: string
  alt?: string
  width: number
  height: number
  className?: string
}

export type RegionShare = {
  color: string
  label: string
}

export type EditionOverview = {
  date: string
  university: string
  paragraphs: string[]
}

export type PieChartConfig = {
  title: string
  data: ChartDatum[]
  colors: string[]
  outerRadius: number
  legendHeight: number
}

export type CoverImage = {
  src: string
  alt: string
  width: number
  height: number
}

export type ThematicLinesData = {
  intro: string
  items: { name: string }[]
}

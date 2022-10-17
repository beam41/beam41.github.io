import dayjs from 'dayjs'

export type WorkType = 'Full-time' | 'Intern'
export type Title = {
  readonly name: string
  readonly type: WorkType
  readonly start: dayjs.Dayjs
  readonly end?: dayjs.Dayjs
}
export type WorkPlace = {
  readonly place: string
  readonly title: Title[]
  readonly desc?: string | null
}

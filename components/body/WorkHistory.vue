<template>
  <div class="work-wrapper">
    <div v-for="w in works">
      <h2 class="head place">{{ w.place }}</h2>
      <p v-if="w.desc" class="head desc">
        {{ w.desc }}
      </p>
      <div class="head total-time">
        {{
          durationToString(
            w.title.at(-1)?.start ?? dayjs(),
            w.title.at(0)?.end ?? dayjs()
          )
        }}
      </div>
      <div class="title-wrap">
        <h3 v-for="title in w.title" class="title">
          <span class="name">
            {{ title.name }} &centerdot; {{ title.type }}
          </span>
          <span class="date">
            {{ title.start.format('MMM YYYY') }} -
            {{ title.end ? title.end.format('MMM YYYY') : 'Present' }}
            &centerdot; {{ durationToString(title.start, title.end) }}
          </span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { durationToString } from '~/util/workDateHelper'
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
  readonly desc?: string
}

const works: readonly WorkPlace[] = [
  {
    place: 'Manao Software',
    title: [
      {
        name: 'Mid-Level Web Developer',
        type: 'Full-time',
        start: dayjs('2022-04'),
      },
      {
        name: 'Junior Developer',
        type: 'Full-time',
        start: dayjs('2021-04'),
        end: dayjs('2022-03'),
      },
    ],
    desc: 'Worked on project using C# (ASP.NET Core) and JavaScript (React, Angular)',
  },
  {
    place: 'Artisan Digital',
    title: [
      {
        name: 'Frontend Developer',
        type: 'Intern',
        start: dayjs('2021-05'),
        end: dayjs('2021-10'),
      },
    ],
    desc: 'Worked on project using Vue.js',
  },
]
</script>

<style lang="scss" scoped>
.work-wrapper {
  margin-top: -32px;
}

.head {
  margin: 0 0 8px;
}

.place {
  margin-top: 32px;
}

.total-time {
  font-size: 0.9rem;
}

.title {
  font-weight: normal;
  font-size: 1rem;
  margin: 16px 0 0;

  & > span {
    display: block;
  }

  .name {
    margin-bottom: 2px;
  }

  .date {
    font-weight: bold;
    font-size: 0.8rem;
  }
}
</style>

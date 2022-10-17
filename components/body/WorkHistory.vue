<template>
  <div v-for="w in works">
    <h2 class="info place">{{ w.place }}</h2>
    <p v-if="w.desc" class="desc">
      {{ w.desc }}
    </p>
    <h3 v-for="title in w.title" class="info title">
      {{ title.name }} &centerdot; {{ title.type }} |
      {{ `${title.start.format('MMM')} ${title.start.year()}` }} -
      {{
        title.end ? `${title.end.format('MMM')} ${title.end.year()}` : 'Present'
      }}
      &centerdot; {{ durationToString(title.start, title.end) }}
    </h3>
  </div>
</template>

<script lang="ts" setup>
import { durationToString } from '~/util/workDateHelper'
import dayjs from 'dayjs'
import { WorkPlace } from '~/util/workplaceType'

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
    desc: null,
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
    desc: null,
  },
]
</script>

<style lang="scss" scoped>
.info {
  margin: 0 0 8px;
}

.title {
  font-weight: normal;
  color: rgb(85, 85, 85);
}

.desc {
  margin: 16px 0 0;
}
</style>

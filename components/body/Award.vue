<template>
  <div class="award-wrapper">
    <div v-for="award of awards" class="award-item">
      <h2 class="award">{{ award.name }}</h2>
      <div class="info-date">
        <span class="info">{{ award.info ? `${award.info} ` : '' }}</span>
        <template v-if="award.info">|</template>
        {{ award.date.format('MMMM YYYY') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'

export type Award = {
  readonly name: string
  readonly date: dayjs.Dayjs
  readonly info?: string
}

const awards: Award[] = [
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    date: dayjs('2021-10'),
  },
  {
    name: 'Google Code Jam 2021, Qualification Round',
    date: dayjs('2021-03'),
    info: '41pts',
  },
  {
    name: 'Google Hash Code 2021, Qualification Round',
    date: dayjs('2021-02'),
    info: 'Rank 227th',
  },
]
</script>

<style lang="scss" scoped>
.award-wrapper {
  margin-top: -32px;
}

.award-info {
  margin-top: 32px;
}

.award {
  margin: 32px 0 8px;
  font-size: 1.17em;
}

.info-date {
  font-size: 0.9em;
}

.info {
  font-weight: bold;
}
</style>

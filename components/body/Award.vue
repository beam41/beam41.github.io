<template>
  <div class="award-wrapper">
    <div v-for="award of awards" class="award-item">
      <h2 class="award">
        <component
          :is="award.link ? 'a' : 'span'"
          class="award-inner"
          :href="award.link"
          :target="award.link && '_blank'"
          :rel="award.link && 'noopener'"
          >{{ award.name }}</component
        >
      </h2>
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

type Award = {
  readonly name: string
  readonly date: dayjs.Dayjs
  readonly info?: string
  readonly link?: string
}

const awards: Award[] = [
  {
    name: 'Career Essentials in Software Development by Microsoft and LinkedIn',
    date: dayjs('2022-12'),
    link: 'https://www.linkedin.com/learning/certificates/d6dfa4849775d286c01be374cc30b1c0c28aa99ad3e6c11814082be82c7e8354',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    date: dayjs('2021-10'),
    link: 'https://www.credly.com/badges/e7f9fdfc-3225-4774-a347-4bfd0177e8b0',
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

  a.award-inner {
    color: currentColor;
    transition: text-decoration-color 0.25s;
    text-decoration-color: white;

    &:hover {
      text-decoration-color: currentColor;
      transition: text-decoration-color 0s;
    }
  }
}

.info-date {
  font-size: 0.9em;
}

.info {
  font-weight: bold;
}
</style>

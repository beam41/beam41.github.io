<template>
  <div class="skill-wrapper">
    <h2 class="skill-head">Experienced in Production</h2>
    <div class="skills">
      <span v-for="s of productionSkills">{{ s }}</span>
    </div>
    <h2 class="skill-head">Learned in My Free Time</h2>
    <div class="skills">
      <span v-for="s of hobbySkills">{{ s }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const productionSkills = [
  'C#',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'SQL',
  'GraphQL',
  'ASP.NET Core',
  'Angular',
  'React',
  'Vue.js',
  'Express.js',
  'AdonisJS',
  'MongoDB',
]

const hobbySkills = [
  'Go',
  'Python',
  'Dart',
  'C++',
  'Flask',
  'OpenCV',
  'Flutter',
  'Unity',
  'Docker',
]
</script>

<style lang="scss" scoped>
.skill-wrapper {
  margin-top: -24px;
}
.skill-head {
  margin: 24px 0 12px;
}

.skills {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -4px -4px;
  & > span {
    white-space: nowrap;
    margin: 4px 4px;
    padding: 4px 18px;
    border-radius: 100px;
    background: rgb(240, 240, 240);
  }
}
</style>

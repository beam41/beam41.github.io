<template>
  <div class="skill-wrapper">
    <h2 class="skill-head">Experienced</h2>
    <div class="skills">
      <span v-for="s of productionSkillsLang">{{ s }}</span>
    </div>
    <div class="skills bot">
      <span v-for="s of productionSkillsFramework">{{ s }}</span>
    </div>
    <h2 class="skill-head">Learned</h2>
    <div class="skills">
      <span v-for="s of hobbySkillsLang">{{ s }}</span>
    </div>
    <div class="skills bot">
      <span v-for="s of hobbySkillsFramework">{{ s }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const productionSkillsLang = [
  'C#',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'SQL',
  'GraphQL',
] as const

const productionSkillsFramework = [
  'ASP.NET Core',
  'Angular',
  'React',
  'Vue.js',
  'Express.js',
  'AdonisJS',
  'MongoDB',
] as const

const hobbySkillsLang = ['Go', 'Python', 'Dart', 'C++'] as const

const hobbySkillsFramework = [
  'Flask',
  'OpenCV',
  'Flutter',
  'Unity',
  'Docker',
] as const
</script>

<style lang="scss" scoped>
.skill-wrapper {
  margin-top: -32px;
}
.skill-head {
  margin: 32px 0 12px;
  font-size: 1.17em;
}

.skills {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -4px -4px;
  color: rgb(95, 95, 95);
  font: {
    size: 0.8em;
    weight: bold;
  }

  & > span {
    white-space: nowrap;
    margin: 4px 4px;
    padding: 4px 18px;
    border-radius: 100px;
    background: rgb(240, 240, 240);
  }

  &.bot {
    margin-top: 8px;
  }
}
</style>

import React from 'react'
import styles from './main.module.scss'

const skillList = [
  {
    name: 'Vue.js',
    link: 'https://github.com/beam41?tab=repositories&q=&type=&language=vue',
  },
  {
    name: 'React',
    link:
      'https://github.com/beam41?tab=repositories&q=&type=&language=javascript',
  },
  {
    name: 'Angular',
    link:
      'https://github.com/beam41?tab=repositories&q=&type=&language=typescript',
  },
  { name: 'SQL', link: 'https://github.com/beam41?tab=repositories' },
  { name: 'MongoDB', link: 'https://github.com/beam41?tab=repositories' },
  {
    name: 'ASP.NET Core',
    link: 'https://github.com/beam41?tab=repositories&q=&type=&language=c%23',
  },
  {
    name: 'Azure',
    link: 'https://github.com/beam41?tab=repositories',
  },
  {
    name: 'Unity',
    link: 'https://github.com/beam41?tab=repositories&q=&type=&language=c%23',
  },
  { name: 'Git', link: 'https://github.com/beam41?tab=repositories' },
  {
    name: 'HTML/CSS',
    link: 'https://github.com/beam41?tab=repositories&q=&type=&language=html',
  },
  {
    name: 'JavaScript',
    link:
      'https://github.com/beam41?tab=repositories&q=&type=&language=javascript',
  },
  {
    name: 'Python',
    link: 'https://github.com/beam41?tab=repositories&q=&type=&language=python',
  },
  {
    name: 'Java',
    link: 'https://github.com/beam41?tab=repositories&q=&type=&language=java',
  },
  {
    name: 'C#',
    link: 'https://github.com/beam41?tab=repositories&q=&type=&language=c%23',
  },
  {
    name: 'Flutter (only basic)',
    link: 'https://github.com/beam41?tab=repositories&q=&type=&language=dart',
  },
]

const Skill = () => (
  <ul className={styles.skillList}>
    {skillList.map(({ name, link }) => (
      <li className={styles.skillItem}>
        <a href={link} className={styles.skillPill}>
          {name}
        </a>
      </li>
    ))}
  </ul>
)

const Main = () => (
  <main className={styles.mainContainer}>
    <div>
      <h1 className={styles.head}>
        <a href="https://www.linkedin.com/in/phumdol-lookthipnapha-ab84011a3/">
          Phumdol Loothipnapha
        </a>
      </h1>
      <p>Student at Chiang Mai University</p>
    </div>
    <div>
      <h2>Skill</h2>
      <Skill />
    </div>
  </main>
)

export default Main

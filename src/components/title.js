import React from 'react'
import { Tween } from 'react-gsap'
import { Controller, Scene } from 'react-scrollmagic'
import styles from './title.module.scss'

const IndexPage = () => (
  <Controller>
    <Scene duration="100%" pin triggerHook="onLeave">
      <Tween from={{ scale: 1 }} to={{ scale: 0 }}>
        <div className={styles.top}>
          <h1>Phumdol</h1>
          <h2>aka Meehoi</h2>
        </div>
      </Tween>
    </Scene>
  </Controller>
)

export default IndexPage

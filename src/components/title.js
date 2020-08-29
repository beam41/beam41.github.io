import React from 'react'
import { Tween } from 'react-gsap'
import { Controller, Scene } from 'react-scrollmagic'
import styles from './title.module.scss'

const IndexPage = () => (
  <Controller>
    <Scene duration="100%" pin triggerHook="onLeave">
      <Tween from={{ scale: 1 }} to={{ scale: 0 }}>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="mt-0 text-title">Phumdol</h1>
          <h2 className={`${styles.subTitle} m-0 text-5xl font-normal italic`}>
            aka Meehoi
          </h2>
        </div>
      </Tween>
    </Scene>
  </Controller>
)

export default IndexPage

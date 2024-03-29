import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber'
import { PageLayout, Content, Loader, SEO, Header } from '../components/common';
import { CardStarted, CardInner } from '../components/Card';

import authorImage from '../assets/img/2pac.jpg'
import styles from './ProfilePage.module.scss'

const ProfilePage = () => {
  const [age, setAge] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    calculateAge()

    // setTimeout(() => {
    // calculateAge()
    // }, 1000)
  }, [])

  const calculateAge = () => {
    setLoading(true)

    const birthDate = new Date(1986, 6, 26)
    const difference = Date.now() - birthDate.getTime()
    const ageDate = new Date(difference)
    const age = Math.abs(ageDate.getUTCFullYear() - 1970)

    setAge(age);
    setLoading(false)
  }

  return (
    <>
      <SEO
        title='Andrii Pavliuk | vCard / Resume / CV'
        description='I am Andrii Pavliuk, full-stack software engineer from Ukraine, Kiev.'
      />
      {
        loading
          ? (
            <Canvas>
              <pointLight position={[10, 10, 10]} />
              <Loader />
            </Canvas>
          )
          : <PageWrapper age={age} />
      }
    </>
  )
}

const PageWrapper = ({ age }: any) => {
  return (
    <PageLayout>
      <Header />
      <CardStarted />
      <CardInner>

        <Content name='about'>
          <div className={styles.title}>
            <span className={styles['first-word']}>About</span> Me
          </div>

          <div className={styles.row}>

            <div className={`${styles.col} ${styles['col-d-6']} ${styles['border-line-v']}`}>
              <div className={styles['text-box']}>
                <p>
                  I am Andrii Pavliuk, full-stack software engineer from Ukraine, Kyiv.
                  I make the web a more interactive and exciting place by creating applications
                  for the modern 🌍 world. I love working with the latest technologies
                  to build modular and testable projects.
                </p>
              </div>
            </div>

            <div className={`${styles.col} ${styles['col-d-6']} ${styles['border-line-v']}`}>
              <div className={styles['info-list']}>
                <ul>
                  <li>
                    <strong>Age . . . . .</strong>{age}
                  </li>
                  <li>
                    <strong>Residence . . . . .</strong>{'UA'}
                  </li>
                  <li>
                    <strong>Freelance . . . . .</strong>{'Remotely Available'}
                  </li>
                  <li>
                    <strong>Address . . . . .</strong>{'Kyiv, UA'}
                  </li>
                </ul>
              </div>

            </div>
            <div className={styles.clear} />

          </div>
        </Content>

        <Content name='services'>
          <div className={styles.title}>
            <span className={styles['first-word']}>My</span> Services
          </div>

          <div className={`${styles.row} ${styles['service-items']} ${styles['border-line-v']}`}>

            <div className={`${styles.col} ${styles['col-6']}`}>
              <div className={styles['service-item']}>
                <div className={styles.icon}>
                  <span className={`${styles.fa} ${styles['fa-front']}`} />
                </div>
                <div className={styles.name}>
                  <span>Frontend Developer</span>
                </div>
                <div className={styles.desc}>
                  <p>
                    Making modern web apps using React and TypeScript.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.col} ${styles['col-6']}`}>
              <div className={styles['service-item']}>
                <div className={styles.icon}>
                  <span className={`${styles.fa} ${styles['fa-back']}`} />
                </div>
                <div className={styles.name}>
                  <span>Backend Developer</span>
                </div>
                <div className={styles.desc}>
                  <p>
                    Creating infrastructure using C#, .NET Framework with various technologies like AWS, Microsoft Azure, etc.
                  </p>
                </div>
              </div>

            </div>

          </div>
          <div className={styles.clear} />

        </Content>

        <Content name='quote'>
          <div className={styles.title}>
            <span className={styles['first-word']}>Q</span>uote
          </div>

          <div className={styles.row}>
            <div className={`${styles.col} ${styles['col-d-12']} ${styles['border-line-v']}`}>
              <div className={styles['quote-items']}>
                <div className={styles.text}>
                  <div>
                    “ Through every dark night, there's a bright day after that.
                    So no matter how hard it get, stick your chest out, keep ya head up.... and handle it. ”
                  </div>
                </div>
                <div className={styles.author}>
                  <div className={styles.img}>
                    <img src={authorImage} alt="2Pac" />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      Tupac Shakur
                    </div>
                    <div className={styles.company}>
                      Me Against The World
                    </div>
                  </div>
                  <div className={styles.clear} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.clear} />
        </Content>

      </CardInner>
    </PageLayout>
  )
}

export default ProfilePage
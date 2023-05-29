import { Navigate, Route, Routes } from 'react-router-dom'
import { ProfilePage, SkillsPage } from './pages'

import BackgroundVideo from './assets/video/bg.mp4'
import styles from './app.module.scss'

const App = () => {

  return (
    <>
      <div className={`${styles['animation-background']} ${styles.overlay}`}>
        <video className={styles['video-background']}
          preload='auto' autoPlay loop muted playsInline>
          <source src={BackgroundVideo} type='video/mp4' />
        </video>
      </div>
      <Routes>
        <Route path='/' element={<ProfilePage />} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/*' element={<Navigate to='/' replace />} />
      </Routes>
    </>
  )
}

export default App

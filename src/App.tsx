import { Navigate, Route, Routes } from 'react-router-dom'
import { ProfilePage } from './pages'

import BackgroundVideo from './assets/video/background.mp4'
import styles from './App.module.scss'

const App = () => {

  return (
    <div className={`${styles['animation-background']} ${styles.overlay}}`}>
      <video className={styles.overlay} src={BackgroundVideo} autoPlay loop muted />
      <Routes>
        <Route path='/' element={<ProfilePage />} />
        <Route path='/*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  )
}

export default App

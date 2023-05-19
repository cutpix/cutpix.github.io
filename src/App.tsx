import { Navigate, Route, Routes } from 'react-router-dom';
import { ProfilePage } from './pages';

import styles from './App.module.scss'

const App = () => {

  return (
    <div className={styles['animation-background']}>
      <Routes>
        <Route path='/' element={<ProfilePage />} />
        <Route path='/*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react'
import { Html } from '@react-three/drei'

const Loader = () => {
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    setTimeout(() => {
      setProgress(progress + 1)
    }, 10)
  }, [progress])

  return (
    <Html center>
      <span className='canvas-loader'>
        <span>{progress}</span>%
      </span>
    </Html>
  )
}

export default Loader
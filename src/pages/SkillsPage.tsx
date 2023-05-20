import React, { useState, useEffect } from 'react';
import { PageLayout, Content, Loader, SEO, Header } from '../components/common';
import { Canvas } from '@react-three/fiber'

const SkillsPage = () => {

  return (
    <>
      <SEO
        title='Andrii Pavliuk | Technology Skills'
        description='Technology Skills: What They Are and How to Improve Them!'
      />
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <Loader />
      </Canvas>
    </>
  )
}

export default SkillsPage;
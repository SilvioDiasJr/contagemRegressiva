import React from 'react'
import Lottie from 'react-lottie'

import chutandoBalde from '../assets/chutandoBalde.json'

// import { Container } from './styles';

function Rescisao() {
  return (
    <div>
      <Lottie 
        options={{
          loop: true,
          animationData: chutandoBalde,
          autoplay: true
        }}
        speed={2}
        width={350}
        height={350}
      />
    
    </div>
  )
}

export default Rescisao;
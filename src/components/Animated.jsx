import React from 'react'
import Lottie from 'react-lottie'

import clock from '../assets/clock.json'

// import { Container } from './styles';

function Animated() {
  return (
    <div>
      <Lottie 
        options={{
          loop: true,
          animationData: clock,
          autoplay: true
        }}
        speed={0.5}
        width={150}
        height={150}
      />
    
    </div>
  )
}

export default Animated;
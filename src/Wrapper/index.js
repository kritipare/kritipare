import Particles from 'react-particles-js';
import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                density_auto: true,
                enable: true,
                value_area: 1000,
              }
            },
          },
        }}
      >
        {children}
      </Particles>
  )
}

export default Wrapper;

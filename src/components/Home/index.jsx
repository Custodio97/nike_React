import React from 'react'
import {Section} from './style'
import Img from '../../image/img.jpg'
const Home = () => {
  return (
      <Section id='home'>
          
          <div className='content'>
              <h1>New Year Collection</h1>
              <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
            </div>
         
          <img src={Img} alt="nike shoes" />
      </Section>
      
  )
}

export default Home
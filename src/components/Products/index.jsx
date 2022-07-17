import React from 'react'
import {Section} from './style'
import nikeImg from '../../assets/nike.jpg'
import nikeImg1 from '../../assets/nike2.jpg'
import nikeImg2 from '../../assets/nike3.jpg'
import nikeImg3 from '../../assets/nike4.jpg'
const About = () => {
  return (
      <Section id="products">
          <h1>The New Must-Haves</h1>
          <h2>Save an extra 20% on all sale styles<br/>using code SAVE20 at checkout.</h2>
          <div className='gruop_card'>
              <div className="card">
               <img src={nikeImg} alt="" />
              </div>
              <div className="card">
                  <img src={nikeImg1} alt="" />
              </div>
              <div className='card'>
                  <img src={nikeImg2} alt="" />
              </div>
              <div className='card'>
                  <img src={nikeImg3} />
              </div>
          </div>
     </Section>
  )
}

export default About
import React from 'react'
import { Section } from './style'
import nike from '../../image/nike.jpeg'
const About = () => {
  return (
      <Section id="about">
          <div className='container'>
              <div className='content__container'>
                  <p>Beginning in 2020, Nike will become the the exclusive provider of Major League Baseball’s on-field uniforms (which will feature a Nike Swoosh), including baselayers, game-day outerwear and training apparel.</p>

                  <p>“Nike’s global brand and reputation as a leader in driving innovation makes them an ideal partner,” says Baseball Commissioner Robert D. Manfred, Jr.</p>

                  <p>Nike will also continue as an official MLB sponsor, supporting league initiatives, grassroots marketing and fan events. Nike, as part of the new agreement, will partner with all 30 MLB Clubs and promote its brand and products across MLB media assets, including MLB Network, MLB.com and MLB Social.</p>
              </div>
              <img src={nike} alt="" />
          </div>
    </Section>
  )
}

export default About
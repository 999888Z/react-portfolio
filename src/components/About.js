import React from 'react'
import boss from '../assets/image.png'

const About = () => {
  return (
    <div className="height-adjust">
      <div className="about port" style={{marginBottom: "20px"}}>

      <div className="container">
        <div className="row">
          <div className="col" style={{marginLeft: "10px"}}>
            <p className="about-text">I'm a dedicated web developer with a knack for turning ideas into interactive and visually captivating websites. With a strong foundation in coding and a keen eye for design, I strive to create exceptional online experiences that leave a lasting impression.</p>
          </div>
          <div className="col boss">
            <img className="boss" src={boss}/>
          </div>
        </div>
      </div>





      </div>
    </div>
  )
}

export default About

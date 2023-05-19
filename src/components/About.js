import React from 'react'
import boss from '../assets/image.png'

const About = () => {
  return (
    <div className="height-adjust">
      <div className="about port" style={{marginBottom: "20px"}}>

      <div className="container">
        <div className="row">
          <div className="col" style={{marginLeft: "10px"}}>
            <p className="about-text">My name is John. Thank you for viewing my portfolio.
I am a full-stack developer who is passionate about programming and technological development. I am looking forward to applying my knowledge, problem-solving ability and creativity to create entertaining and easily accessible websites.</p>
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

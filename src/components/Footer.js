import React from 'react'

const Footer = () => {
  return (
    <div className="foot">
   <h2 style={{textAlign: "center", color: "#e2211c"}}>My Links</h2>
    <div className="foot2">
    
      <a href="https://linkedin.com/in/johnwilday" target="_blank"rel='noreferrer'><i className="fa-brands fa-linkedin fa-3x"></i></a>
      <a href="https://github.com/999888Z/" target="_blank"rel='noreferrer'><i style={{color:"black"}}className="fa-brands fa-github fa-3x"></i></a>
      <a href="https://stackoverflow.com/" target="_blank"rel='noreferrer'><i style={{color: "#f48125"}}className="fa-brands fa-stack-overflow fa-3x"></i></a>
    </div>
    </div>
  )
}

export default Footer

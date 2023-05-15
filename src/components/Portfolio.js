import React from 'react'
import tech from '../assets/tech-blog-screenshot.png'
import concert from '../assets/concert-connection.png'
import image from '../assets/image-ai-screenshot.png'
import weather from '../assets/weather-dashboard.png'
import password from '../assets/generate-password.png'
import scheduler from '../assets/work-day-scheduler.png'




const Portfolio = () => {

  const projects = [

    {
    name: "Tech Blog",

    img: tech,

    alt: 'Tech Blog',
    
    link: 'https://tech-blog99.herokuapp.com/',
    
    ghlink: 'https://github.com/999888Z/tech-blog',
    
    desc: 'A tech blog with user posts and comments on posts from other users.'
    },
    
    {
      name: "Concert Connection",

      img: concert,

      alt: 'Concert Connection',
    
      link: 'https://ionscion.github.io/miniature-garbanzo/',
    
      ghlink: 'https://github.com/ionscion/miniature-garbanzo',
    
      desc: 'Find nearby concerts, purchase concert tickets, and get directions from current location to the concert venue.'
    },
    
    {
    name: "Image AI",

    img: image,

    alt: 'Image AI',
    
    link: 'https://imageai.herokuapp.com',

    ghlink: 'https://github.com/Nmargolis00/image-AI',
    
    desc: 'Utilizes the DALL-E API to generate images from user prompts, which allows the user to sign-in and save their images and/or share them to a public community main page.'
    },
    
    {
      name: "Weather Dashboard",

      img: weather,

      alt: 'Weather Dashboard',
    
      link: 'https://999888z.github.io/current-weather-app/',
    
      ghlink: 'https://github.com/999888Z/current-weather-app',
    
      desc: 'Allows the user to input any city in the world and will then present the city name, current date, an emoji representing current weather condition, and the temperature, humidity, and windspeed, as well as a five-day forecast with the same elements.'
    
    },
    
    {
      name: "Password Generator",

      img: password,

      alt: 'Password Generator',
    
      link: 'https://999888z.github.io/Password-Generator/',
    
      ghlink: 'https://github.com/999888Z/Password-Generator',
    
      desc: 'User is prompted to choose a password length between 8 and 128 and is then asked to confirm four prompts (lowercase, uppercase, numbers and special characters). The user will then be shown their unique, randomly-generated password.'
    
    },
    
    {
      name: "Work-Day Scheduler",

      img: scheduler,

      alt: 'Work-Day Scheduler',
    
      link: 'https://999888z.github.io/Work-Day-Scheduler/',
    
      ghlink: 'https://github.com/999888Z/Work-Day-Scheduler',
    
      desc: 'Allows the user to input text into a timeblock for each hour of the workday and save it by clicking a "lock" button at the end of each timeblock. Local storage is utilized, so the text persists upon page reload. Past hours are grey in color, the current hour is red, and future hours are green.'
    
    },
    
    ]

  return (
    <div className= 'container'>
      <div className= 'row'>
      {projects.map((project) =>   
      <div className="card" style= {{width: "18rem"}}>
  <a href= {project.link}><img src={project.img} className="card-img-top" alt={project.alt} /></a>
  <div className="card-body">

    <h4>{project.name}</h4>
    <p className="card-text">{project.desc}</p>
    <a href= {project.ghlink}>GitHub</a>
  </div>
</div>
)}
</div>
    </div>
  )
}


export default Portfolio

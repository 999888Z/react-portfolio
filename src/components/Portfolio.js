import React from 'react'
import tech from '../assets/tech-blog-screenshot.png'
import concert from '../assets/concert-connection.png'
import image from '../assets/image-ai-screenshot.png'
import weather from '../assets/weather-dashboard.png'
import workout from '../assets/workout-wizard.png'
import car from '../assets/carma.png'




const Portfolio = () => {

  const projects = [
    {
      name: "Carma",

      img: car,

      alt: 'Carma',
    
      link: 'https://carma-car-rental.vercel.app/',
    
      ghlink: 'https://github.com/Hoffalypse/carma-car-nextjs',
    
      desc: 'A mock car-rental application showcasing skills in NextJS, TypeScript, Server-Side Rendering, TailwindCSS and using HeadlessUI components. This app features a very modern UI/UX and completely responsive interface.'
    
    },

    {
      name: "Workout Wizard",

      img: workout,

      alt: 'Workout Wizard',
    
      link: 'https://workout-wizard-app-99.herokuapp.com/',
    
      ghlink: 'https://github.com/999888Z/workout-wizard-app',
    
      desc: 'User is prompted to sign up or sign in. Once authorized, they can search the site by target body area and save an exercise program to their profile.'
    
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
      name: "Tech Blog",
  
      img: tech,
  
      alt: 'Tech Blog',
      
      link: 'https://tech-blog99.herokuapp.com/',
      
      ghlink: 'https://github.com/999888Z/tech-blog',
      
      desc: 'A tech blog with user posts and comments on posts from other users.'
      },
    
    
    
    
    
    ]

  return (
    <div className="port" style={{marginTop: "-16px"}}>
    <div className= 'container' style={{marginTop: "16px"}}>
      <div className= 'row' style={{display: "flex", justifyContent: "center"}}>
      {projects.map((project) =>   
      <div className="card" style= {{width: "18rem", marginRight:"60px", marginBottom: "20px", borderRadius: "20px", padding: "8px", marginTop: "20px"}}>
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
    </div>
  )
}


export default Portfolio

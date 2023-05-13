import React from 'react'

const Portfolio = () => {

  const projects = [

    {
    name: "Tech Blog",

    img: './images/tech-blog-screenshot.png',

    alt: 'Tech Blog',
    
    link: 'https://tech-blog99.herokuapp.com/',
    
    ghlink: 'https://github.com/999888Z/tech-blog',
    
    desc: 'A tech blog with user posts and comments on posts from other users.'
    },
    
    {
      name: "Concert Connection",

      img: './images/concert-connection.png',

      alt: 'Concert Connection',
    
      link: 'https://ionscion.github.io/miniature-garbanzo/',
    
      ghlink: 'https://github.com/ionscion/miniature-garbanzo',
    
      desc: 'An app to find nearby concerts, be able to purchase tickets for the nearby concerts, and get directions from current location to the concert venue.'
    },
    
    {
    name: "Image AI",

    img: './images/image-ai-screenshot.png' ,

    alt: 'Image AI',
    
    link: 'https://imageai.herokuapp.com',
    
    desc: 'An app utilizing the DALL-E API to generate images from user prompts, which allows the user to sign-in and save their images and/or share them to a public community main page.'
    },
    
    {
      name: "Weather Dashboard",

      img: './images/weather-dashboard.png' ,

      alt: 'Weather Dashboard',
    
      link: 'https://999888z.github.io/current-weather-app/',
    
      ghlink: 'https://github.com/999888Z/current-weather-app',
    
      desc: 'An app that allows the user to input any city in the world and be presented with the city name, date, an emoji representing the city current weather condition, and the temperature, humidity, and windspeed, as well as a five-day forecast with the same elements.'
    
    },
    
    {
      name: "Password Generator",

      img: './images/generate-password.png' ,

      alt: 'Password Generator',
    
      link: 'https://999888z.github.io/Password-Generator/',
    
      ghlink: 'https://github.com/999888Z/Password-Generator',
    
      desc: 'An app where a user is prompted to choose a password length between 8 and 128 and is then asked to confirm four prompts (lowercase, uppercase, numbers and special characters). At the completion of these prompts, the user will be shown their unique, randomly-generated password.'
    
    },
    
    {
      name: "Work-Day Scheduler",

      img: '/images/work-day-scheduler.png',

      alt: 'Work-Day Scheduler',
    
      link: 'https://999888z.github.io/Work-Day-Scheduler/',
    
      ghlink: 'https://github.com/999888Z/Work-Day-Scheduler',
    
      desc: 'An app that allows the user to input text into a timeblock for each hour of the workday. The text can be saved by clicking a "lock" button at the end of each timeblock, and the text inputted will persist upon reloading of the page due to local storage being utilized. As the day progresses, past hours will be grey in color, the current hour will be red, and future hours will be green.'
    
    },
    
    ]

  return (
    <div>
      {projects.map((project) =>   
      <div className="card" style= {{width: "18rem"}}>
  <img src={project.img} className="card-img-top" alt={project.alt}/>
  <div className="card-body">
    <p className="card-text">{project.desc}</p>
  </div>
</div>
)}
    </div>
  )
}













export default Portfolio

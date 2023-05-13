import React from 'react'
import About from './About'
import Contact from './Contact'
import Resume from './Resume'
import Portfolio from './Portfolio'

const Routing = (props) => {
  console.log(props.page)
  if (props.page === "About") {
    return <About/>
  }
  else if (props.page === "Contact") {
    return <Contact/>
  }
  else if (props.page === "Resume") {
    return <Resume/>
  }
  else if (props.page === "Portfolio") {
    return <Portfolio/>
  }

}

export default Routing

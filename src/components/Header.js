import {useState} from 'react'
import Routing from './Routing'

const Header = () => {
    const [page, setPage] = useState("About")

    const handleClick = (e) => {
        setPage(e.target.value)
    }
    
  return (
    <div>
      <h1 style={{textAlign: "center"}}>John Wilday</h1>
      <nav style={{backgroundColor: "blue"}}>
        <ul style={{listStyle: "none"}}>
        
            <li> 
                <button 
                value={"About"} 
                onClick={handleClick}
                className={page === "About"? "activeTab":""}
                
                >
                About Me </button>
            </li>
            <li> 
                <button 
                value={"Portfolio"} 
                onClick={handleClick}
                className={page === "Portfolio"? "activeTab":""}
                >
              Portfolio </button>
            </li>
            <li> <button 
            value={"Contact"} 
            onClick={handleClick}
            className={page === "Contact"? "activeTab":""}
            >
                Contact </button>
            </li>
            <li> <button 
            value={"Resume"} 
            onClick={handleClick}
            className={page === "Resume"? "activeTab":""}
            >
                Resume </button>
            </li>
        </ul>
      </nav>
      <Routing page = {page} />

    </div>
  )
}

export default Header

import {useState} from 'react'
import Routing from './Routing'

const Header = () => {
    const [page, setPage] = useState("About")

    const handleClick = (e) => {
        setPage(e.target.value)
    }
    
  return (
    <div>
      <h1 style={{textAlign: "center", color: "#e2211c"}}>John Wilday</h1>
      <nav className="" style={{backgroundColor: "#003764"}}>
        <ul className="links" style={{listStyle: "none"}}>
        
            <li> 
                <button 
                value={"About"} 
                onClick={handleClick}
                className={page === "About"? "activeTab":"head-btn"}
                
                >
                About Me </button>
            </li>
            <li> 
                <button 
                value={"Portfolio"} 
                onClick={handleClick}
                className={page === "Portfolio"? "activeTab":"head-btn"}
                >
              Portfolio </button>
            </li>
            <li> <button 
            value={"Contact"} 
            onClick={handleClick}
            className={page === "Contact"? "activeTab":"head-btn"}
            >
                Contact </button>
            </li>
            <li> <button 
            value={"Resume"} 
            onClick={handleClick}
            className={page === "Resume"? "activeTab":"head-btn"}
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

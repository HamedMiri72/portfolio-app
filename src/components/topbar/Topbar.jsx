import React from 'react'
import "./Topbar.scss"
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

const Topbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className= {"topbar " + (menuOpen && "active")} id='topbar'>

      <div className="wrapper">

        <div className="left">
            <a href="#intro" className='logo'>genius.</a>

            <div className="itemContainer">

              <PersonIcon className='icon'/>
              <span>+44 735 584 8222</span>

            </div>

            <div className="itemContainer">

              <EmailIcon  className='icon'/>
              <span>hamedmiri72@gmail.com</span>

            </div>
        </div>

        <div className="right">

          <div className="humberguer" onClick={() => setMenuOpen(!menuOpen)}>

            <span className='line-1'></span>
            <span className='line-2'></span>
            <span className='line-3'></span>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Topbar
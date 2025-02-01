import React from 'react'

const portfolioList = ({title, id,  active, setSelected}) => {
  return (
   <li className={active ? "portfolioList active" : "portfolioList"} onClick={() => setSelected(id)}>
    {title}
   </li>
  )
}

export default portfolioList
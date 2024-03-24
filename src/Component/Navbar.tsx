import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <Link to ="/" className ='' > All 
        </Link>

        <Link to ="/?todos-active" className =''>  Active </Link>
        <Link to ="/?todos-completed" className=''> Completed </Link>
    </nav>
  )
}

export default Navbar
import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <h1>Welcome to Payrol System </h1>
  <NavLink to="/payrol"><input id='b2'  type='submit' value={"Continue"}/></NavLink>

        
    </div>
  )
}

export default Home;
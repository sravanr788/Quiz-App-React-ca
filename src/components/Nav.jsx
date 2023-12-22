import React from 'react'

const Nav = ({isDark,toggleTheme}) => {
  // render the  nav component
  return (
    <div>
      <div className='nav'>
    <div className='logobox'>
    <img src="https://kalvium.community/images/logo_min.svg" alt="" className="logo" />
    <p className='title'> Kalvium Quiz</p>
    </div>
  <button onClick={toggleTheme} style={{
    backgroundColor : `${isDark ? "#fcf1da" : "black"}`,
    color : `${!isDark ? 'white' : 'black'}`
  }}> {isDark ? "Light theme" : "Dark theme"}</button>
</div>
    </div>
  )
}

export default Nav
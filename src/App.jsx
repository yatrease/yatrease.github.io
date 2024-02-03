import React, { useState } from 'react';
import Maincontainer from './components/Maincontainer'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Login from './components/Login';
function App() {
  const [isLight, setTheme] = useState(true)
  const [isLoggedIn, setLogInState] = useState(false)
  const changeTheme = () => {
        setTheme(!isLight)
    }
  return (
    <div>
      {isLoggedIn ? (<div>
      <Navbar mode={changeTheme} isLight={isLight}/>
      <Maincontainer mode={changeTheme} isLight={isLight}/>
      
      </div>
) : (<Login setLogInState={setLogInState}/>) }
<Footer mode={changeTheme} isLight={isLight}/>
    </div>
  )
}

export default App

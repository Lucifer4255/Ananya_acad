import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Components/Header/Header'
import { Home } from './Components/Home/Home'
import { About } from './Components/About/About'
import { Experience } from './Components/Experience/Experience'
import {
  Services
} from './Components/Services/Services'
import { Clients } from './Components/Clients/Clients'
import { Team } from './Components/Team/Team'
import { Contact } from './Components/Contact/Contact'
import { Footer } from './Components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <About />
      <Experience />
      <Services/>
      <Clients/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

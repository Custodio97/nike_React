import React,{useState} from 'react'
import { Header } from './style'
import {FaBars,FaTimes} from 'react-icons/fa'
import { SiNike } from 'react-icons/si'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick=()=> setIsOpen(!isOpen)
  return (
      <Header>
          <nav>
              <div className='logo'>
                  <SiNike size={100} color="#ccc" />
              </div>
              <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#products">Products</a></li>
                  <li><a href="#about">about</a></li>
                  <li><a href="#">Exit</a></li>
              
              </ul> 
          </nav>
          <div className='toggle' onClick={handleClick}>
              {isOpen ? (<FaTimes size={27} color="#532e2eccc" />) : (<FaBars size={27} color="#532e2eccc"/>)}
          </div>
    </Header>
  )
}

export default Navbar
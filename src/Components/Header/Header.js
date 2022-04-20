import React from 'react'
import { Container, DarkModeContainer, HeaderContainer, Title } from './Styles'
import { HiOutlineMoon } from 'react-icons/hi'
import { BsSun } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Header = ({ setDarkMode, isDarkMode }) => {
  return (
    <HeaderContainer isDarkMode={isDarkMode} >
      <Container>
        <Title isDarkMode={isDarkMode} >
          <Link to='/'><h1>Where in the world?</h1></Link>
        </Title>
        <DarkModeContainer onClick={() => setDarkMode(!isDarkMode)}>
          {
            isDarkMode ?
            <div><BsSun fontSize={20} /></div> :
            <div><HiOutlineMoon fontSize={20} /></div>
          }
            <div>
              Dark mode
            </div>
        </DarkModeContainer>
      </Container>
    </HeaderContainer>
  )
}

export default Header
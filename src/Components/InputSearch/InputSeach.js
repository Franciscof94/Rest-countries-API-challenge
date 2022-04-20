import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { Container, InputContainer } from './Styles'
import { API_URL_NAME } from '../../constants/Constants'

const InputSeach = ({ setCountries, countries, isDarkMode }) => {
  
      const filterCountry = async (value) => {
        const res = await fetch(API_URL_NAME(value))
        if (!res) setCountries(countries)
        const data = await res.json()

        if(value !== ''){
          setCountries(data)
        } 
    
    }

  return (
    <InputContainer>
      <Container isDarkMode={isDarkMode}>
        <div>
          <IoSearch />
        </div>
        <input isDarkMode={isDarkMode} type='text' placeholder='Search for a country...' onChange={((e) => filterCountry(e.target.value))} />
      </Container>
    </InputContainer>
  )
}

export default InputSeach
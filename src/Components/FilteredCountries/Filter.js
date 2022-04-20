import React, { useEffect, useState } from 'react'
import { FilterContainer, Icons, Regions, Title } from './Styles'
import { API_URL_REGION } from '../../constants/Constants';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Filter = ({ setCountries, isDarkMode}) => {
  const[open, setOpen] = useState(false)
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']


  const filterCountryByRegion = async (value) => {
    const res = await fetch(API_URL_REGION(value))
    const data = await res.json()
    setCountries(data)
}

 const handleOpenDropdown = () => {
    open ? setOpen(false) : setOpen(true);
  }



  return (
    <FilterContainer onClick={handleOpenDropdown} isDarkMode={isDarkMode}>
      <Title onClick={handleOpenDropdown} isDarkMode={isDarkMode}>
        <span>Filter by Region</span>       
        <Icons>
          {
            open ? 
            <IoIosArrowUp />
            : 
            <IoIosArrowDown />
          }
        </Icons>
      </Title>
      <Regions open={open} isDarkMode={isDarkMode}>
        {
          regions.map((region, i) => (<div onClick={() => filterCountryByRegion(region)} key={i}><span>{region}</span></div>))
        }
      </Regions>
    </FilterContainer>
  )
}

export default Filter
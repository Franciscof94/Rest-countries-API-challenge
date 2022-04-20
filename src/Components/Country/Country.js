import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Info } from '../Countries/Styles';
import { BorderCountries, Button, Container, CountryContainer, Details, DetailsContainer, ImageContainer, InfoContainer } from './Styles'
import { BsArrowLeftShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { API_URL_CODE } from '../../constants/Constants';


const Country = ({ isDarkMode }) => {
  const {state}  = useLocation();
  const [currencies, setCurrencies] = useState('');
  const [languages, setLanguages] = useState('');
  const [codes, setCodes] = useState([])
  
  console.log(state)



  useEffect(() => {
    setCurrencies(
      Object.values(state.country.currencies)
        .map((currency) => currency.name)
        .join(', ')
    );
    setLanguages(
      Object.values(state.country.languages)
        .map((language) => language)
        .join(', ')
    );

    const requestBorders = async () => {
      const res = await fetch(API_URL_CODE(state.country.borders))
      const countryCodes = await res.json()
      setCodes(countryCodes.map((code) => code.name.common));
    }

    requestBorders()
  
  },[state])


  return (
    <CountryContainer isDarkMode={isDarkMode}>
      <Container>
      <Link to='/' ><Button isDarkMode={isDarkMode}><BsArrowLeftShort fontSize={20} />Back</Button></Link>
      <DetailsContainer>
        <ImageContainer>
          <img src={state.country.flags.png} alt='flagImg' />
        </ImageContainer>
        <Details>
        <InfoContainer isDarkMode={isDarkMode}>
            <div>
                <Info>Native name: <span>{state.country.name.official}</span></Info>
                <Info>Population: <span>{state.country.population.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}</span></Info>
                <Info>Region: <span>{state.country.region}</span></Info>
                <Info>Sub region: <span>{state.country.subregion}</span></Info>
            </div>
            <Details>
                <Info>Currencies: <span>{currencies}</span></Info>
                <Info>Languages: <span>{languages}</span></Info> 
            </Details>
        </InfoContainer>
            <BorderCountries isDarkMode={isDarkMode}>
              <Info>Border countries: </Info> <ul>{codes.map(code => (<li>{code}</li>))}</ul>
            </BorderCountries>
        </Details>
      </DetailsContainer>
      </Container>
    </CountryContainer>
  )
}

export default Country
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL_ALL } from '../../constants/Constants'
import Filter from '../FilteredCountries/Filter'
import InputSearch from '../InputSearch/InputSeach'
import Loading from '../Loading/Loading'
import { CardContainer, Cards, Container, Country, Details, FilterContainer, ImageContainer, Info, MainContainer } from './Styles'


const Countries = ({ isDarkMode  }) => {
    const[countries, setCountries] = useState([])
    const[loading, setLoading] = useState(true)
 
    const navigate = useNavigate()

    const requestCountries = async () => {
        const res = await fetch(API_URL_ALL)
        const data = await res.json()
        setCountries(data)
        setLoading(false)
    }
    
    useEffect(() => {   
        requestCountries();
    }, [])
 


  return (
     <MainContainer isDarkMode={isDarkMode} >
         {loading ? <Loading /> : 
         <Container>
         <FilterContainer>
            <InputSearch setCountries={setCountries} countries={countries} isDarkMode={isDarkMode} />
            <Filter  setCountries={setCountries} isDarkMode={isDarkMode} /> 
         </FilterContainer>
            <CardContainer>
                { countries.length > 0 ?
                countries.map((country, i) => (
                        <Cards isDarkMode={isDarkMode} key={i} onClick={() => navigate(`/${country.name.common}`, {state: { country }})}>
                            <ImageContainer>
                                <img alt='countryImg' src={country.flags.png} />
                            </ImageContainer>
                            <Details isDarkMode={isDarkMode}>
                                <Country>{country.name.common}</Country>
                                <Info>Population: <span>{country.population.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}</span></Info>
                                <Info>Region: <span>{country.region}</span></Info>
                                <Info>Capital: <span>{country.capital}</span></Info>
                            </Details>
                        </Cards>   
                   
                    ))       : <div>No results</div>
                }
            </CardContainer>
         </Container>
         }
     </MainContainer>
  )
}

export default Countries
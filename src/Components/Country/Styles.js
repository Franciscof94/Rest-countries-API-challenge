import styled from 'styled-components'

export const CountryContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 35px 50px;
    transition: .2s all ease-in-out;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 1080px;

    a{
        width: 120px;
        text-decoration:none
    }
    
    div:last-child{
        display: flex;

    }
`

export const DetailsContainer = styled.div`
     @media (max-width: 768px) {
            flex-direction: column;
        } 
`

export const ImageContainer = styled.div`
    margin-right: 25px;
    img{
        width: 40%;
        min-width: 300px;
        object-fit: cover;
        object-position: center center;
        margin-bottom: 3rem;
        aspect-ratio: 16 / 9
    }
`

export const Button = styled.button`
    width: 120px;
    padding: 10px 0;
    border: none;
    background-color: ${props => props.isDarkMode ? '#2B3945' : 'white'};
    transition: .2s all ease-in-out;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    cursor: pointer;
    color: ${props => props.isDarkMode ? 'white' : '#2c2c2c'};
    transition: .2s all ease-in-out;
    border-radius: 4px;
    margin-bottom: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BorderCountries = styled.div`
    display: flex;
    color: ${props => props.isDarkMode ? 'white' : '#2c2c2c'};
    transition: .2s all ease-in-out;
    align-items: center;
    margin: 15px;
    flex-direction: column;
    ul{
        padding: 0;
        margin: 5px;
        display: flex;
        flex-wrap: wrap;
        li{
            list-style: none;
            padding: 8px 20px;
            margin: 5px 9px;
            box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
            background-color: white;
            border-radius: 4px;
            background-color: ${props => props.isDarkMode ? '#2B3945' : 'white'};
            transition: .2s all ease-in-out;
        }
    }
`

export const Details = styled.div`
    flex-direction: column;

`

export const InfoContainer = styled.div`
    display: flex;
    color: ${props => props.isDarkMode ? 'white' : '#2c2c2c'};
    transition: .2s all ease-in-out;
    @media (max-width: 768px) {
            flex-direction: column;
        }
    div{
        margin: 15px;
        div{
            margin: 5px
        }
    }
   
`
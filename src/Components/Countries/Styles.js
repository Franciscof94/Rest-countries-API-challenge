import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 35px 50px;
    transition: .2s all ease-in-out;
    position: relative;
`


export const Container = styled.div`
    flex-wrap: nowrap;
    width: 100%;
    height: auto;
    max-width: 1080px;
`

export const CardContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        a{
            text-decoration: none;
            color: #2c2c2c
        }
`

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const Cards = styled.div`
    width: 232px;
    margin: 19px;
    border-radius: 6px;
    background-color: ${props => props.isDarkMode ? '#33414C' : 'white'};
    transition: .2s all ease-in-out;
    cursor: pointer;
    transition: transform 250ms ease;
    &:hover{
        transform: translateY(-5px);
        box-shadow: 0 0 12px -5px rgb(0 0 0 / 20%);
        background-color: ${props => props.isDarkMode ? '#303b44' : '#f3f3f3'};
        transition: .2s all ease-in-out;
    }

`



export const ImageContainer = styled.div`
    img{
        width: 100%;
        object-fit: cover;
        height: 160px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px
    }
`

export const Country = styled.div`
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 10px
`

export const Info = styled.div`
    font-weight: 600;
    line-height: 1.6;
    span{
        font-weight: normal
    }
`

export const Details = styled.div`
    padding: 23px;
    color: ${props => props.isDarkMode ? 'white' : '#2c2c2c'};
    transition: .2s all ease-in-out;
`
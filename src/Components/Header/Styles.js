import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${props => props.isDarkMode ? '#2B3945' : 'white'};
    transition: .2s all ease-in-out;
    height: 70px;
    box-shadow: 3px 3px 5px rgb(149 149 149 / 15%);
    padding: 0 50px;
    color: ${props => props.isDarkMode ? 'white' : '#2c2c2c' }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1080px;
    width: 100%
`

export const DarkModeContainer = styled.div`
    display: flex;
    align-items: start;
    cursor: pointer;

    div:last-child{
        font-weight: 500;
        margin-left: 6px;
    }
`

export const Title = styled.div`
    cursor: pointer;
    a{
        text-decoration: none;
        color: #2c2c2c
    }
    
    h1{
        font-size: 1.5rem;
        color: ${props => props.isDarkMode ? 'white' : '#2c2c2c' };
        transition: .2s all ease-in-out;
        margin: 0;
        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }
`
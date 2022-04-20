import styled from 'styled-components'

export const InputContainer = styled.div`
    width: 27em;
    border-radius: 4px;
    @media (max-width: 768px) {
            width: 18em;
            margin-bottom: 25px;
        };
    

    div{
        color: #bebebe; 
        font-size: 27px;
        margin-right: 10px;
        vertical-align: middle;
    }

    input{
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        font-size: 17px;
     
        font-weight: 500;
        background-color: transparent;
        ${'' /* &::placeholder {  
            color: ${props => props.isDarkMode ? 'white' : 'black'}
        } */}
    }
`

export const Container = styled.div`
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    width: 100%;
    min-height: 1.7em;
    display: flex;
    align-items: center;
    position: relative;
    padding: 2px 15px;
    background-color: ${props => props.isDarkMode ? '#2B3945' : 'white'};
    transition: .2s all ease-in-out;
    border-radius: 4px;
`
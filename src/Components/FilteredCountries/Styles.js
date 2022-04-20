import styled from 'styled-components'

export const FilterContainer = styled.div`

`

export const Title = styled.div`
    background-color: ${props => props.isDarkMode ? '#2B3945' : 'white'};
    color: ${props => props.isDarkMode ? 'white' : '#2c2c2c'};
    transition: .2s all ease-in-out;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    padding: 14px 20px;
    cursor: pointer;
    border-radius: 4px;
    width: 167px;
    display: flex;
    align-items: center;
`

export const Regions = styled.div`
    display: ${props => !props.open ? 'none' : 'block'};
    background-color: ${props => props.isDarkMode ? '#303b44' : 'white'};
    transition: .2s all ease-in-out;
    margin-top: 5px;
    color: ${props => props.isDarkMode ? 'white' : '#2c2c2c'};
    border-radius: 4px;
    position: absolute;
    width: 207px;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    div{
        padding: 6px 20px;
        cursor: pointer;
        &:hover{
            background-color: ${props => props.isDarkMode ? '#27333e' : '#cfcfcf'};
            transition: .2s all ease-in-out;
        }
    }
`

export const Icons = styled.div`
    margin-left: 25px;
`
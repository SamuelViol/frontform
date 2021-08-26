import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
border-radius: 50px;
background: #003f91;
border: 2px solid;
border-color: white;
width: 150px;
height: 50px;
justify-content: center;
align-items: center;
justify-content: center;
display: flex;
white-space: nowrap;
color: white;
text-decoration: none;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover{
    color: black;
    background: white;
    border-color:  #003f91;
    width: 150px;
    transition: all 0.2s ease-in-out;
}	
`
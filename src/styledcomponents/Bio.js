import styled from 'styled-components'
import theme from "../json/theme.json"

export const BioContainer = styled.section`
text-align: center;
background-color: #fae29b;
padding: 20px;
margin: auto;
color: ${theme.color1};


`
export const BioImage = styled.img`
width: 40%;
object-fit: cover;
border-radius: 60px;
` 

export const BioDescriptionContainer = styled.section`
width: 60%;
text-align: center;
margin: auto;
`
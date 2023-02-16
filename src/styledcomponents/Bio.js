import styled from 'styled-components'
import theme from "../json/theme.json"

export const BioContainer = styled.section`
display: flex;
text-align: center;
background-color: ${theme.color1};
padding: 30px;
margin: auto;
width: 65%;
color: ${theme.color3};
margin-top: 20px;
margin-bottom: 80px;
border-radius: 50px;
border: 2px solid black;
height: 720px;


`
export const BioImage = styled.img`
height: 600px;
object-fit: fill;
border: 3px solid black;
border-radius: 60px;
border: 2px solid black;
margin: 10px;

` 

export const BioDescriptionContainer = styled.section`
width: 50%;
text-align: center;
margin: auto;
font-size: 1.3rem;
border: 2px solid black;
border-radius: 10px;
padding: 20px;
`

export const BioPictureContainer = styled.section`
display: block;
padding: 0px;
height: 400px
`

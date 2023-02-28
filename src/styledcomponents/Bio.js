import styled from 'styled-components'
import theme from "../json/theme.json"

export const BioContainer = styled.section`
display: flex;
background-color: ${theme.color1};
padding: 30px;
margin: auto;
width: 65%;
color: ${theme.color3};
margin-top: 20px;
margin-bottom: 80px;
border-radius: 60px;
border: 2px solid black;
height: 720px;
@media all and (max-width: 1500px) {
    width: 95%;
    display: block;
    height: auto;
    text-align: center;
    padding: 0px;
}
`
export const BioImage = styled.img`
height: 600px;
object-fit: fill;
border: 3px solid black;
border-radius: 60px;
border: 2px solid black;
margin: 10px;
@media all and (max-width: 1500px) {
    width: 70%;
    height: auto;
}

` 

export const BioDescriptionContainer = styled.section`
width: 50%;
margin: auto;
font-size: 1.3rem;

border-radius: 10px;
padding: 20px;
@media all and (max-width: 1500px) {
    width: 90%;
    text-align: left;
    font-size: 1.1rem
}
`

export const BioPictureContainer = styled.section`
display: block;
padding: 0px;
height: 400px
@media all and (max-width: 1500px) {
    display: flex;
 text-align: center;
 justify-content: center;
}
`
export const BioBox = styled.div`
height: 80px;`
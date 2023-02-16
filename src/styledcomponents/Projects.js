import theme from "../json/theme.json"
import styled from "styled-components"


export const ProjectsContainer = styled.section`
display: flex;
flex-wrap: wrap;
text-align: center;
align-items: center;
padding: 5%;
background-color: ${theme.color1};
row-gap: 20px;
`
export const ProjectCard = styled.div`
width: 30%;
height: 320px;
min-width: 290px;
text-align: center;
margin: auto;
border: 3px solid ${theme.color3};
background-color: #fae29b;
border-radius: 20px;
padding: 10px;
color: ${theme.color1};
img {
    height: 50%;
    width: 50%;
    margin: 10px;
    border-radius: 10px;
}
`

export const ProjectLink = styled.a`
width: 100px;
padding 2px;
font-weight: 1800;
background-color: ${theme.color1};
text-decoration: none;
color: ${theme.color4};
border-radius: 10px;
&:hover {
    background-color: ${theme.color4};
    color: ${theme.color1}
}
`

export const ProjectDescription = styled.p`
margin-bottom: 5px;
`

export const ProjectLinkContainer = styled.div`
display: flex;
margin: auto;
padding-top: 15px;
justify-content: space-around;
`
export const ProjectTitleContainer = styled.div`
padding-top: 15px;
align-items: center;
`
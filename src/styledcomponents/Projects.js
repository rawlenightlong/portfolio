import theme from "../json/theme.json"
import styled from "styled-components"


export const ProjectsContainer = styled.section`
display: flex;
flex-wrap: wrap;
padding: 5%;
justify-content: space-around;
background-color: ${theme.color1};
margin: auto;
`
export const ProjectCard = styled.div`
width: 30%;
min-width: 290px;
text-align: center;
margin: 10px;
border: 3px solid ${theme.color3};
background-color: ${theme.color5};
border-radius: 20px;
padding: 10px;
color: ${theme.color4};
img {
    height: 50%;
    width: 50%;
    margin: 10px;
}
`

export const ProjectLink = styled.a`
width: 30%;
padding 2px;
font-weight: 1800;
background-color: ${theme.color1};
text-decoration: none;
color: ${theme.color4};
border-radius: 20px;
&:hover {
    background-color: ${theme.color4};
    color: ${theme.color1}
}
`

export const ProjectDescription = styled.p`
margin-bottom: 10px;
`

export const ProjectLinkContainer = styled.div`
display: flex;
margin: auto;
justify-content: center;
`
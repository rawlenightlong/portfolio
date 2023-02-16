import styled from "styled-components"
import theme from "../json/theme.json"


export const FooterContainer = styled.header`
text-align: center;
position: sticky;
bottom: 0;
background-color: ${theme.color1};
color: ${theme.color4};
`

export const NavContainer = styled.nav`
display: flex;
position: sticky;
bottom: 0;
padding-bottom: 20px;
justify-content: space-around;
flex-wrap: wrap;
font-family: 'Comfortaa', cursive;
font-size: 20px;
`

export const NavLinkWrapper = styled.a`
text-decoration: none;
color: white;
&:hover {
    color: ${theme.color3};
    font-weight: 800;
    transform: scale(1.1);
    transition: .2s;
}
`
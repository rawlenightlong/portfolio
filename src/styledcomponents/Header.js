import styled from "styled-components"
import theme from "../json/theme.json"


export const HeaderContainer = styled.header`
text-align: center;
position: sticky;
top: 0;
padding-bottom: 15px;
background-color: ${theme.color1};
color: ${theme.color4};
align-items: center;
justify-content: center;
`

export const NavContainer = styled.nav`
display: flex;
position: sticky;
top: 0;
justify-content: space-around;
flex-wrap: wrap;
font-family: 'Comfortaa', cursive;
font-size: 20px;
@media all and (max-width: 545px){
    display: flex;
    justify-content: space-around;
    row-gap: 10px;
    
}
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
&:active{
    color: yellowl;
}

`
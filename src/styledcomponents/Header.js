import styled from "styled-components"
import theme from "../json/theme.json"


export const HeaderContainer = styled.header`
padding: 10px;
text-align: center;
background-color: ${theme.color1};
color: ${theme.color4};
`

export const NavContainer = styled.nav`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`

export const NavLinkWrapper = styled.a`
text-decoration: none;
color: white;
&:hover {
    color: ${theme.color3};
    font-weight: 800;
}
`
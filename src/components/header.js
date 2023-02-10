
import { HeaderContainer } from "../styledcomponents/Header"
import { NavContainer } from "../styledcomponents/Header"
import { NavLinkWrapper } from "../styledcomponents/Header"


export default function Header (props) {
    return (<>
    
    <HeaderContainer>
        <h1>My Portfolio</h1>
        <br></br>
        <NavContainer>
            <NavLinkWrapper href="https://github.com/rawlenightlong">
                <div>Github</div>
            </NavLinkWrapper>
            <NavLinkWrapper href="https://linkedin.com/in/rawlebecerril">
                <div>LinkedIn</div>
            </NavLinkWrapper>
            <NavLinkWrapper href=""><div>Google</div></NavLinkWrapper>
        </NavContainer>
    </HeaderContainer>
    
    </>)
}
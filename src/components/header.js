
import { HeaderContainer } from "../styledcomponents/Header"
import { NavContainer } from "../styledcomponents/Header"
import { NavLinkWrapper } from "../styledcomponents/Header"


export default function Header (props) {
    return (<>
    
    <HeaderContainer>
        <h1>Rawle's Dev Portfolio</h1>
        <br></br>
        <NavContainer>
            <NavLinkWrapper href="https://github.com/rawlenightlong" target="_blank" rel="noopener noreferrer">
                <div>Github</div>
            </NavLinkWrapper>
            <NavLinkWrapper href="https://linkedin.com/in/rawlebecerril" target="_blank" rel="noopener noreferrer">
                <div>LinkedIn</div>
            </NavLinkWrapper>
            <NavLinkWrapper href=""><div>Google</div></NavLinkWrapper>
        </NavContainer>
    </HeaderContainer>
    
    </>)
}

import { HeaderContainer } from "../styledcomponents/Header"
import { NavContainer } from "../styledcomponents/Header"
import { NavLinkWrapper } from "../styledcomponents/Header"
import resume from "../assets/Resume.pdf"


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
            <NavLinkWrapper href={resume} download="Rawle Becerril_021023_ATS Resume"><div>Resume</div></NavLinkWrapper>
        </NavContainer>
    </HeaderContainer>
    
    </>)
}
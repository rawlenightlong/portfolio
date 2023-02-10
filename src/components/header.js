
import { HeaderContainer } from "../styledcomponents/Header"
import { NavContainer } from "../styledcomponents/Header"
import { NavLinkWrapper } from "../styledcomponents/Header"
import resume from "../assets/Resume.pdf"


export default function Header (props) {
    return (<>
    <img src="https://i.imgur.com/EEuBkkM.png" alt="logo" style={
        {
            "width": "25%",
            "height": "25%",
            "margin-left": "35%",
            "border-radius": "10px"
            }
        }/>
    <HeaderContainer>
        <br></br>
        <NavContainer>
            <NavLinkWrapper href="https://github.com/rawlenightlong" target="_blank" rel="noopener noreferrer">
                <div>Github</div>
            </NavLinkWrapper>
            <NavLinkWrapper href="https://linkedin.com/in/rawlebecerril" target="_blank" rel="noopener noreferrer">
                <div>LinkedIn</div>
            </NavLinkWrapper>
            <NavLinkWrapper href={resume} download="Rawle Becerril_021023_ATS Resume"><div>Resume</div></NavLinkWrapper>
            <NavLinkWrapper href="">Contact

            </NavLinkWrapper>
        </NavContainer>
    </HeaderContainer>
    
    </>)
}
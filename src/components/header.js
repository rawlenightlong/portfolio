
import { HeaderContainer } from "../styledcomponents/Header"
import { NavContainer } from "../styledcomponents/Header"
import { NavLinkWrapper } from "../styledcomponents/Header"
import resume from "../assets/Resume.pdf"
import {FaGithub} from "react-icons/fa"
import {AiFillLinkedin, AiOutlineMail, AiOutlineDownload} from "react-icons/ai"


export default function Header (props) {
    return (<>
    <img src="https://i.imgur.com/EEuBkkM.png" alt="logo" style={
        {
            "width": "35%",
            "margin-left": "30%",
            "border-radius": "10px"
            }
        }/>
    <HeaderContainer>
        <br></br>
        <NavContainer>

            <NavLinkWrapper href="https://github.com/rawlenightlong" target="_blank" rel="noopener noreferrer">
                <div><FaGithub/> Github</div>
            </NavLinkWrapper>

            <NavLinkWrapper href="https://linkedin.com/in/rawlebecerril" target="_blank" rel="noopener noreferrer">
                <div><AiFillLinkedin/> LinkedIn</div>
            </NavLinkWrapper>

            <NavLinkWrapper href={resume} download="Rawle Becerril_021023_ATS Resume">
                <div><AiOutlineDownload/> Resume</div>
            </NavLinkWrapper>

            <NavLinkWrapper href="">
                <div><AiOutlineMail/> Contact</div>
            </NavLinkWrapper>

        </NavContainer>
    </HeaderContainer>
    
    </>)
}
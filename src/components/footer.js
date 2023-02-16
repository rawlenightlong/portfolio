import {BsBoxArrowInUpRight} from "react-icons/bs"
import { FooterContainer } from "../styledcomponents/Footer"
import { NavContainer } from "../styledcomponents/Footer"
import { NavLinkWrapper } from "../styledcomponents/Header"
import resume from "../assets/Resume.pdf"
import {FaGithub} from "react-icons/fa"
import {AiFillLinkedin, AiOutlineMail, AiOutlineDownload} from "react-icons/ai"


export default function Header (props) {
    return (<>
    
    <FooterContainer>
        <br></br>
        <NavContainer>

            <NavLinkWrapper href="https://github.com/rawlenightlong" target="_blank" rel="noopener noreferrer">
                <div><FaGithub/> Github</div>
            </NavLinkWrapper>

            <NavLinkWrapper href="https://linkedin.com/in/rawlebecerril" target="_blank" rel="noopener noreferrer">
                <div><AiFillLinkedin/> LinkedIn</div>
            </NavLinkWrapper>

            <NavLinkWrapper href={resume} target="_blank">
                <div><BsBoxArrowInUpRight/> Resumé</div>
            </NavLinkWrapper>

            <NavLinkWrapper href="">
                <div><AiOutlineMail/> Contact</div>
            </NavLinkWrapper>

        </NavContainer>
    </FooterContainer>
    
    </>)
}
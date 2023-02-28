
import { HeaderContainer } from "../styledcomponents/Header"
import { NavContainer } from "../styledcomponents/Header"
import { NavLinkWrapper } from "../styledcomponents/Header"
import { AiOutlineProject, AiOutlineMail } from "react-icons/ai"
import {RxAvatar} from "react-icons/rx"
import {BsPencil} from "react-icons/bs"


export default function Header (props) {
    return (<>
    <img className="logo" src="https://i.imgur.com/EEuBkkM.png" alt="logo" style={
        {
            "width": "33%",
            "justify-content": "center",
            "border-radius": "10px",
            "margin": "0 auto",
            "display": "flex"
            }
        }/>
    <HeaderContainer>
        <br></br>
        <NavContainer>

            <NavLinkWrapper href="#bio" rel="noopener noreferrer">
                <div class="link"><RxAvatar/> About Me</div>
            </NavLinkWrapper>

            <NavLinkWrapper href="#skills" rel="noopener noreferrer">
                <div class="link"><BsPencil/> Skills</div>
            </NavLinkWrapper>

            <NavLinkWrapper href="#projects">
                <div class="link"><AiOutlineProject/> Projects</div>
            </NavLinkWrapper>

            <NavLinkWrapper href="#contact">
                <div><AiOutlineMail/> Contact</div>
            </NavLinkWrapper>

        </NavContainer>
    </HeaderContainer>
    
    </>)
}
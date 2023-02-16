
import { HeaderContainer } from "../styledcomponents/Header"
import { NavContainer } from "../styledcomponents/Header"
import { NavLinkWrapper } from "../styledcomponents/Header"
import { AiOutlineProject } from "react-icons/ai"
import {RxAvatar} from "react-icons/rx"
import {BsPencil} from "react-icons/bs"


export default function Header (props) {
    return (<>
    <img class="logo" src="https://i.imgur.com/EEuBkkM.png" alt="logo" style={
        {
            "width": "35%",
            "align-items": "center",
            "border-radius": "10px"
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

        </NavContainer>
    </HeaderContainer>
    
    </>)
}
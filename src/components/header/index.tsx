
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { LoginContext } from "../../providers/loginProvider"
import { BtnSubmitGlassMorphism } from "../modal/btnSubmit-Glass"
import { Logo } from "./logo";
import { StyledHeader } from "./styled"


export const Header = ()=>{

  return(
    <StyledHeader>
      <Logo/>
      <BtnSubmitGlassMorphism text='logout'/>
    </StyledHeader>
  )
}
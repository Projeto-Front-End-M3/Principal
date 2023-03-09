
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { LoginContext } from "../../providers/loginProvider"
import { BtnSubmitGlassMorphism } from "../modal/btnSubmit-Glass"
import { StyledHeader } from "./styled"


export const Header = ()=>{

  return(
    <StyledHeader>
      <h2>Logo</h2>
      <BtnSubmitGlassMorphism text='logout'/>
    </StyledHeader>
  )
}
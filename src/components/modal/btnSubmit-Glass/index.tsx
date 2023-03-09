import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginContext } from "../../../providers/loginProvider";
import { StyleContainerBtnGlassMorphism } from "./style"


export const BtnSubmitGlassMorphism = ({ text }: any) =>{
    const { setUser } = useContext(LoginContext)
    const navigate = useNavigate();
    
    const userLogout = () =>{
        window.localStorage.removeItem("@USERID")
        window.localStorage.removeItem("@Token")
        setUser(null)
        navigate('/')
        toast.success('Usuário Deslogou')
    }

    if(text === 'logout'){
        return(
            <StyleContainerBtnGlassMorphism text={text}>
                <button type="submit" onClick={() => userLogout()}>{text}</button>
            </StyleContainerBtnGlassMorphism>
        )
    }else if(text === '+'){
        return(
            <StyleContainerBtnGlassMorphism text={text}>
                <button type="submit" onClick={() => console.log('teste')}>{text}</button>
            </StyleContainerBtnGlassMorphism>
        )
    }
}
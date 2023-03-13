import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { LoginContext } from "../../providers/loginProvider"


export const ProtectedRoutes = () =>{
    const {user} = useContext(LoginContext)

    const navigate = useNavigate()

    useEffect(() =>{
        if(!user){
            navigate('/')
        }
    })

    return(
        <>
            {user ? <Outlet/> : null}
        </>
    )
}
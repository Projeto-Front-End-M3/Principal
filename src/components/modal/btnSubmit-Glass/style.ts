import styled, { css } from "styled-components";


export const StyleContainerBtnGlassMorphism  = styled.div`
    position: relative;
    padding: 5px;

    button{
    width: 110px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #EDF2FF;
    font-size: 1.2rem;
    border: 1px solid rgba(255,255,255,0.4);
    border-right: 1px solid rgba(255,255,255,0.2);
    border-right: 1px solid rgba(255,255,255,0.2);
    border-radius: 10px;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(4px);
    box-shadow: 0 5px 45px rgba(255,255,255,0.1);
    text-decoration: none;
    letter-spacing: 2px;
    outline: none;
    cursor: pointer;
    overflow: hidden;

    }

    button:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 100%;
    background: rgba(255,255,255,0.5);
    transform: skewX(45deg) translateX(450px);
    transition: 1s;
    }

    button:hover::before{
        transform: skewX(45deg) translateX(-350px);
    }

    ${({text}) =>{
        if(text == 'logout'){
            return css`
                button{
                    height: 30px;
                }
            `
        }else if(text == '+'){
            return css`

            `
        }
    }}
`
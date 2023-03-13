import styled from 'styled-components';

export const StyledModalRegisterProduct = styled.article`
    color: var(--color-grey-900);
    width: 330px;
    height: fit-content;
    box-shadow: 0 0 10px #212529, 0 0 40px #343A40, 0 0 80px  #868E96;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50vh;
    left: 50vw;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: var(--font-size-18);
    header{
        display: flex;
        justify-content: space-between;

        button{
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #EDF2FF;
            font-size: 1.2rem;
            border: 1px solid rgba(255,255,255,0.4);
            border-right: 1px solid rgba(255,255,255,0.2);
            border-bottom: 1px solid rgba(255,255,255,0.2);
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
    }

    form{
        .btn__register{
            width: 150px;
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
            margin-top: 15px;
        }

        .btn__register:before{
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

        .btn__register:hover::before{
            transform: skewX(45deg) translateX(-350px);
        }
    }


`
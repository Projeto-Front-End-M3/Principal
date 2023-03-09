import styled from 'styled-components';

export const StyledLoginPage = styled.main`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 700px){
        ::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            background: linear-gradient(18deg, var(--color-secondary) 20%, rgb(57, 199, 223,0.1)) 80%;
            clip-path: circle(21% at 30% 20%);
        }
    
        ::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 30%;
        height: 100%;
        background: linear-gradient(var(--color-primary), var(--color-primary));
        clip-path: circle(21% at 30% 20%);
        }
    }
`
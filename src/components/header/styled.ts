import styled from 'styled-components'


export const StyledHeader =  styled.header`
    height: 10vh;
    min-width: 100vw;
    display: flex;
    position: fixed;
    top: 0;
    z-index: 1000;
    background: var(--color-primary); 
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 0 10px #39c7df, 0 0 40px #39c7df, 0 0 80px #39c7df ;


    
    @media(min-width: 768px){
        height: 8vh;
        justify-content: space-between;
        padding: 0 50px;
    }
`
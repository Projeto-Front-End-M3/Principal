import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle` 
*{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        list-style: none;
    }
`;

export const GlobalStyle = createGlobalStyle`

    :root{
        --color-primary: #003b42;
        --color-secondary: #39c7df;
        --color-tertiary: #1E1E1E;
        
        --gray-100: #333333;
        --grey-50: #828282;
        --grey-20: #E0E0E0;
        --grey-0: #F5F5F5;

        font-size: 62.5%;

        --font-size-38: 3.8rem;
        --font-size-28: 2.8rem;
        --font-size-26: 2.6rem;
        --font-size-24: 2.4rem;
        --font-size-22: 2.2rem;
        --font-size-20: 2rem;
        --font-size-18: 1.8rem;
        --font-size-16: 1.6rem;
        --font-size-14: 1.4rem;
        --font-size-12: 1.2rem;

        --font-weigth-900: 900;
        --font-weigth-800: 800;
        --font-weigth-700: 700;
        --font-weigth-600: 600;
        --font-weigth-500: 500;
        --font-weigth-400: 400;

        --border-radius: 0.8rem;

        --font-family-inter: "Inter", sans-serife;
    }

    body{
        background-image: linear-gradient(180deg, var(--color-primary), var(--color-secondary), var(--color-tertiary));
        background-attachment:fixed ;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    button{
        cursor: pointer;
    }
`;

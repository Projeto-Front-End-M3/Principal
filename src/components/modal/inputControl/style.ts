import styled, { css } from 'styled-components'

export const StyleFieldset =  styled.fieldset`
    position: relative;
    margin: 50px 0 0 0;
    border:  none;

    input{
    width: 95%;
    resize: none;
    padding: 8px 0;
    border: none;
    outline: none;
    /* border-bottom: 1px solid var(--color-grey-900); */
    border-bottom: 1px solid ;
    background: transparent;
    /* font-size: var(--font-size-5); */
    font-size: 1rem;
    font-weight: 300;
    padding-left: 10px;
    z-index: 100;
    /* color: var(--color-grey-900); */
    color:  #000;
    }

    label{
    position: absolute;
    left: 20px;
    bottom: 13px;
    /* color: var(--color-grey-500); */
    color: #868E96 ;
    /* font-size: var(--font-size-5); */
    font-size: 1rem;
    cursor: inherit;

    transition: 0.3s;
    }

    input:focus ~ label,
    input:valid ~ label
    {
    transform: translateY(-28px);
    font-size: 0.8rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    }

    span{
        position: absolute;
        left: 10px;
        text-transform: uppercase;
        font-size: var(--font-size-6);
        color: var(--color-primary-focus);
        bottom: -15px;
    }
`


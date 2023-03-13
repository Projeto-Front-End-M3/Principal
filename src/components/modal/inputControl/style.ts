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
        border-bottom: 1px solid var(--color-grey-900);
        background: transparent;        
        font-weight: 300;
        padding-left: 10px;
        z-index: 100;
        color: var(--color-grey-900);
        font-size: var(--font-size-14);
    }
    
    label{
        position: absolute;
        left: 20px;
        bottom: 13px;
        color: #868E96 ;
        color: var(--color-grey-900);
        font-size: var(--font-size-14);
        cursor: inherit;
        transition: 0.3s;
    }
    
    input:focus ~ label,
    input:valid ~ label
    {
        transform: translateY(-28px);
        font-size: var(--font-size-12);
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    
    span{
        position: absolute;
        left: 10px;
        text-transform: uppercase;
        font-size: var(--font-size-12);
        color: #FA526F;
        bottom: -20px;
    }
`


import styled from 'styled-components'


export const StyledContainerShowcase =  styled.section`


    button{
        cursor: pointer;
    }

    ul{
        display: flex;
        align-items: center;
        list-style: none;
        overflow-x: auto;

        li{
            padding: 10px;
            min-width: 347px;
            height: 240px;
            background-color: #EDF2FF;
            margin: 5px 20px 20px 5px;
            border-radius: 8px;
            box-shadow: 0 4px 4px #00000040;

            .hardware__control{
                display: flex;
                gap: 15px;
            }
        }

    }

`
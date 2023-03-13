import styled from 'styled-components'


export const StyledContainerShowcase =  styled.section`
    width: 100vw;
    header{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(255,255,255,0.2);
        padding: 15px;

        h2{
            font-size: var(--font-size-22);
            letter-spacing: 2px;
            color: var(--color-grey-900);
        }

        .btn__create{
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #EDF2FF;
            font-size: var(--font-size-38);
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

        .btn__create:before{
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

        .btn__create:hover::before{
                transform: skewX(45deg) translateX(-350px);
        }
    }



    ul{
        display: flex;
        align-items: center;
        list-style: none;
        overflow-x: auto;
        margin-top: 15px;

        li{
            border-right: 1px solid rgba(255,255,255,0.4);
            border-bottom: 1px solid rgba(255,255,255,0.4);
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(4px);
            padding: 10px;
            min-width: 347px;
            height: 240px;
            margin: 5px 20px 20px 5px;
            border-radius: 8px;
            box-shadow: 0 4px 4px #00000040;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            color: var(--color-grey-900);

            ::before{
                content: '';
                position: absolute;
                top: 0;
                left: 3;
                width: 90px;
                height: 100%;
                background: rgba(255,255,255,0.3);
                transform: skewX(45deg) translateX(450px);
                transition: 0.2s;
            }

            :hover::before{
                transform: skewX(45deg) translateX(-350px);
            }
            .container__img{
                height: 35%;

                img{
                    width: 280px;
                }
            }

            .container__info{
                display: flex;
                justify-content: space-between;
                font-size: var(--font-size-14);
                letter-spacing: 2px;
            }

            .category__product{
                width: 100px;
                height: 20px;
                background-color: rgba(255,255,255,0.3);
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                letter-spacing: 4px;
                color: var(--color-grey-900);
            }

            .hardware__control{
                display: flex;
                gap: 15px;

                .btn__update{
                    padding: 10px;
                    background-color:gray;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: none;
                    outline: none;
                }

                .btn__delete{
                    padding: 10px;
                    background-color: #52170b ;
                    display: flex;
                    color: var(--color-grey-900);
                    justify-content: center;
                    align-items: center;
                    border: none;
                    outline: none;
                }

                .btn__delete:hover{
                    background-color: #a51b0b;
                }

                .btn__update:hover{
                    background-color: #d7d350;
                }
            }
        }

    }

    @media screen and (min-width: 1200px){
        width: 1200px;
    }

`
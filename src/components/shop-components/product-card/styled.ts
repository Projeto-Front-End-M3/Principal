import styled from 'styled-components'

export const StyledProductCard = styled.li`
            border-right: 1px solid rgba(255,255,255,0.4);
            border-bottom: 1px solid rgba(255,255,255,0.4);
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(8px);
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
                transition: 0.3s;
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
                width: 140px;
                height: 20px;
                background-color: rgba(255,255,255,0.3);
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                letter-spacing: 4px;
                color: var(--color-grey-900);
            }

  button {
    margin-top: 1rem;
    width: 150px;
    border-radius: var(--border-radius);
    height: 25px;
    border: solid 1px black;
    background-color: var(--color-primary);
    font-size: var(--font-size-14);
    font-weight: var(--font-weigth-600);
    color: var(--grey-800);
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      background-image: linear-gradient(
        to right,
        var(--color-secondary),
        transparent
      );
      color: var(--gray-100);
    }
  }
`

import styled from 'styled-components';

export const StyledProductCardCart = styled.li`
  width: 90%;
  border-right: 1px solid rgba(255,255,255,0.4);
  border-bottom: 1px solid rgba(255,255,255,0.4);
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(8px);
  padding: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 20px 20px 5px;
  border-radius: 8px;
  box-shadow: 0 4px 4px #00000040;
  overflow: hidden;
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
  
  .img_cart{
    width: 50px;
    height: 50px;
    border-radius: 4px 0 0 4px;
    box-sizing: border-box;
  }

  .button_cart {
    width: 80px;
    margin-right: 5px;
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
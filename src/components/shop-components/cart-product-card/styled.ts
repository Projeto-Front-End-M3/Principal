import styled from 'styled-components';

export const StyledProductCardCart = styled.li`
  width: 90%;
  border: solid 1px black;
  border-radius: 4px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  
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
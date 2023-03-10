import styled from 'styled-components'

export const StyledProductCard = styled.li`
  border: solid 1px black;
  border-radius: 4px;
  height: 300px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
  
  img{
    width: 100%;
    height: 150px;
    border-radius: 4px 4px 0 0;
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

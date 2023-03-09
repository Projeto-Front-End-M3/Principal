import styled from "styled-components";
import { Link as styledRegister } from "react-router-dom";

export const StyledFormLogin = styled.form`
  width: 100%;
  max-width: 310px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px;
  border-radius: var(--border-radius);
  font-family: var(--font-family-inter);
  gap: 20px;
  background-image: radial-gradient(
    circle,
    var(--color-primary),
    var(--color-secondary),
    transparent
  );

  h2 {
    font-size: var(--font-size-16);
    font-weight: var(--font-weigth-600);
    color: var(--color-tertiary);
  }

  span {
    font-weight: var(--font-weigth-500);
    color: var(--grey-20);
  }

  fieldset {
    display: flex;
    flex-direction: column;
    border: none;
    gap: 5px;
  }

  input {
    width: 100%;
    height: 25px;
    background-image: linear-gradient(
      to top,
      var(--color-secondary),
      transparent
    );
    border: none;
    border-radius: var(--border-radius);
    padding: 10px;
    cursor: pointer;
    :hover {
      opacity: 0.9;
    }
  }

  button {
    width: 150px;
    border-radius: var(--border-radius);
    height: 25px;
    border: none;
    background-color: var(--color-primary);
    font-size: var(--font-size-14);
    font-weight: var(--font-weigth-600);
    color: var(--grey-20);
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
`;

export const LinkRegister = styled(styledRegister)`
  font-size: var(--font-size-12);
  font-weight: var(--font-weigth-600);
  text-decoration: none;
  color: var(--color-tertiary);
  font-family: var(--font-family-inter);
`;

import styled from "styled-components";
import { Link as styledRegister } from "react-router-dom";

export const StyledFormLogin = styled.form`
  width: 100%;
  max-width: 350px;
  height: 450px;
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
  border-bottom: 1px solid rgba(255,255,255,0.2);
  border-left: 1px solid rgba(255,255,255,0.2);

  h2 {
    font-size: 1.9rem;
    font-weight: var(--font-weigth-600);
    color: var(--color-tertiary);
  }

  span {
    font-weight: var(--font-weigth-500);
    color: var(--grey-800);
  }

  fieldset {
    gap: 5px;
    display: flex;
    flex-direction: column;
    width: 235px;
    border:none;
  }
  .loginBtn{
    align-items: center;
  }
  label{
    font-size:13px;
}

  input {
    width: 100%;
    height: 40px;
    background-image: linear-gradient(
      to top,
      var(--color-secondary),
      transparent
    );
    outline: none;
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
    height: 40px;
    margin-top: 10px;
    border: none;
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
  @media screen and (min-width: 700px){

max-width: 420px;
height: 540px;

fieldset{
  width: 300px;
}
button{
  width: 240px;
  font-size: 17px;
}
h2{
  font-size: 2.3rem;
}
label{
    font-size:15px;
}

}
`;

export const LinkRegister = styled(styledRegister)`
  font-size: 1.5rem;
  font-weight: var(--font-weigth-600);
  text-decoration: none;
  color: var(--color-tertiary);
  font-family: var(--font-family-inter);
  @media screen and (min-width: 700px){
    font-size: 1.8rem;
  }
`

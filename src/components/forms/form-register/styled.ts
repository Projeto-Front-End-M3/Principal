import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFormRegister = styled.div`
width: 100%;
  max-width: 350px;
  height: 690px;
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

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 385px;
    gap: 12px;
    width: 235px;
}

a{
  margin-top: 30px;
  font-size: var(--font-size-16);
  color: var(--color-grey-900);
  letter-spacing: 2px;
  text-decoration: none;
}

label{
    font-size:13px;
}
h2{
  font-size: 1.7rem;
}
.divInput{
  gap: 5px;
    display: flex;
    flex-direction: column;
    width: 235px;
}
  
form input {
    width: 100%;
    height: 40px;
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

 form button {
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
    height: 700px;

    form{
      height: 400px;
      width: 300px;
      
    }
   form input{
      width: 300px;
    }
    h2{
      font-size: 2rem;
    }
    form button{
      width: 250px;
    
    }
    .divInput{
      width:300px ;
    }
}
`
export const LinkReg = styled(Link)`
  font-size: 1.5rem;
  font-weight: var(--font-weigth-600);
  text-decoration: none;
  color: var(--color-tertiary);
  font-family: var(--font-family-inter);
 
`
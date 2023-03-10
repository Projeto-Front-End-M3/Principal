import styled from 'styled-components'

export const StyledShopPage = styled.main`
  margin-top: 8rem;
  width: 100vw;
  font-family: var(--font-family-inter);
  font-size: var(--font-size-16);

  .header_container {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 1rem;

    @media(min-width: 768px){
      gap: 30px;
    }

    .link_page {
      color: black;
      font-weight: var(--font-weigth-600);
    }
  }

  .main_dados {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .form_shop {
    width: 90%;
    max-width: 700px;
    height: 400px;
    margin: 0 auto;
    margin-top: 1rem;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    font-family: var(--font-family-inter);
    gap: 20px;
    background-image: radial-gradient(
      circle,
      var(--color-primary),
      var(--color-secondary),
      transparent
    );
  }

  .input_shop {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 400px;
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

  .button_shop {
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

  .products_shop{
    width: 90%;
    max-width: 700px;
    margin: 0 auto;
    margin-top: 1rem;
    padding: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    font-family: var(--font-family-inter);
    gap: 20px;
    background-image: radial-gradient(
      circle,
      var(--color-primary),
      var(--color-secondary),
      transparent
    );

    .card_shop{
      font-weight: var(--font-weigth-600);
    }
    .price_shop{
      font-weight: var(--font-weigth-500);
      color: var(--color-grey-100);
    }
  }

  .cart_shop{
    width: 90%;
    max-width: 700px;
    min-height: 400px;
    margin: 0 auto;
    margin-top: 1rem;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: var(--border-radius);
    font-family: var(--font-family-inter);
    gap: 20px;
    background-image: radial-gradient(
      circle,
      var(--color-primary),
      var(--color-secondary),
      transparent
    );

    .ul_cart{
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  }


`

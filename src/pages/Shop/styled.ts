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
    margin-top: 100px;

    @media(min-width: 768px){
      gap: 30px;
    }

    .link_page {
      color: var(--color-grey-900);
      text-decoration: none;
      font-weight: var(--font-weigth-600);
      border-bottom: 1px solid rgba(255,255,255,0.4);
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(4px);
      padding: 10px;
      border-right: 1px solid rgba(255,255,255,0.4);
      box-shadow: 0 4px 4px #00000040;
      overflow: hidden;
    }
    .link_page::before{
      content: '';
      position: absolute;
      top: 0;
      left: 3;
      width: 90px;
      height: 100%;
      background: rgba(255,255,255,0.3);
      transform: skewX(45deg) translateX(450px);
      transition: 0.8s;
    }

    .link_page:hover::before{
      transform: skewX(45deg) translateX(-350px);
    }
  }

  .main_dados {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--color-grey-900);
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
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 10px #212529, 0 0 40px #343A40, 0 0 80px  #868E96;
    border-right: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }

  .form_shop-info{
    border-right: 1px solid rgba(255,255,255,0.4);
    border-bottom: 1px solid rgba(255,255,255,0.4);
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(8px);
    padding: 10px;
    height: 50px;
    min-width: 330px;
    box-shadow: 0 4px 4px #00000040;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    color: var(--color-grey-900);
    border-radius: 8px;
  }
  .form_shop-info::before{
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
  .form_shop-info:hover::before{
    transform: skewX(45deg) translateX(-350px);
  }

  .input_shop {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 330px;
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
    outline: none;
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
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 1rem;
    padding: 2rem 0;
    display: flex;
    /* align-items: center; */
    border-radius: var(--border-radius);
    font-family: var(--font-family-inter);
    gap: 20px;
    overflow-x: auto;

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
    color: var(--color-grey-900);
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 10px #212529, 0 0 40px #343A40, 0 0 80px  #868E96;
    border-right: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);

    .ul_cart{
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  }
  @media(min-width: 1224px){
    .products_shop{
      flex-wrap: wrap;
    }
  }

`

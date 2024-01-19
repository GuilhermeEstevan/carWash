import styled from "styled-components";
import banner from "../images/car-wash-3960877_1280.jpg";

const Wrapper = styled.div`
  background: var(--gray);
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 1rem;
  font-family: "open-sans";

  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .banner {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: relative;
    height: 15rem;
    background-image: url(${banner});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: var(--shadow-4);
  }

  .banner-content {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  .form-section {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: var(--shadow-4);
    height: 40rem;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h3 {
      font-size: 2.5rem;
      color: var(--primary-1);
      margin-bottom: 2rem;
    }
  }

  .login-form {
    width: 50%;
  }

  .form-row {
    padding: 12px 0;
    width: 100%;
    border-radius: 10px;

    input {
      font-size: 0.9rem;
    }
  }

  .submit-btn {
    margin-top: 1rem;
  }

  .registrationOrLogin {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

    p {
      text-transform: capitalize;
    }

    button {
      cursor: pointer;
      color: var(--primary-1);
      background: transparent;
      border: transparent;
      border-radius: var(--borderRadius);
      letter-spacing: var(--letterSpacing);
      padding: 0.375rem 0.75rem;
      transition: var(--transition);
      text-transform: capitalize;
      display: inline-block;
    }
  }

  @media (min-width: 760px) {
    .container {
      flex-direction: row;
    }
    .banner {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      height: 35rem;
      width: 30rem;
    }

    .banner-content {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    .form-section {
      width: 30rem;
      height: 35rem;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      flex-direction: row;
    }
    .banner {
      width: 30rem;
    }

    .form-section {
      width: 30rem;
    }
  }
`;

export default Wrapper;

import styled from "styled-components";

const Wrapper = styled.div`
  background: linear-gradient(to bottom right, #e9edfa, #d0d6f2);
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 1rem;
  font-family: "open-sans";

  .form-section {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: var(--shadow-4);
    padding: 2rem 0;
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

  .form {
    width: 50%;
  }

  .form-row {
    padding: 12px 0;
    width: 100%;

    input {
      font-size: 0.9rem;
    }
  }

  .submit-btn {
    margin-top: 1rem;
  }

`;

export default Wrapper;

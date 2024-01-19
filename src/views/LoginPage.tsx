import { useState } from "react";
import Wrapper from "../assets/wrappers/loginPage";
import LoginForm from "../components/form/LoginForm";

const LoginPage = () => {
  const [isMember, setIsMember] = useState(true);

  return (
    <Wrapper>
      <div className="container">
        <div className="banner">
          <div className="banner-content"></div>
        </div>
        <LoginForm isMember={isMember} setIsMember={setIsMember} />
      </div>
    </Wrapper>
  );
};

export default LoginPage;

import Wrapper from "../assets/wrappers/companyRegistration";
import CompanyRegistrationForm from "../components/form/CompanyRegistrationForm";

const CompanyRegistration = () => {
  return (
    <Wrapper>
      <div className="container">
        <CompanyRegistrationForm />
      </div>
    </Wrapper>
  );
};
export default CompanyRegistration;

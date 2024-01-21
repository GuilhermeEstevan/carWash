import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../views/LoginPage";
import CompanyRegistration from "../views/CompanyRegistration";

const RoutesMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/company" element={<CompanyRegistration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesMain;

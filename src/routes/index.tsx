import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../views/LoginPage";

const RoutesMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesMain;

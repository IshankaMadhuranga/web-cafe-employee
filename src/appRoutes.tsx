import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cafe from "./pages/cafe";
import Employee from "./pages/employee";

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cafe />} />
        <Route path="/employee/:cafeId" element={<Employee />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;

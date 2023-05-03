import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cafe from "./pages/cafe";
import Employee from "./pages/employee";
import EmployeeForm from "./pages/employeeForm";
import CafeForm from "./pages/cafeForm";

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cafe />} />
        <Route path="/cafe/edit/:cafId" element={<CafeForm type="Edit" />} />
        <Route path="/cafe/add" element={<CafeForm type="Add" />} />
        <Route path="/employee/:cafeId" element={<Employee />} />
        <Route
          path="/employee/edit/:empId"
          element={<EmployeeForm type="Edit" />}
        />
        <Route path="/employee/add" element={<EmployeeForm type="Add" />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;

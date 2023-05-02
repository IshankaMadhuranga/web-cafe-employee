import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cafe from "./pages/cafe";
import Employee from "./pages/employee";
import EmployeeForm from "./pages/employeeForm";

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cafe />} />
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

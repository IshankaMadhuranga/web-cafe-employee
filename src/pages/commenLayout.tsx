import React, { FC } from "react";
import { Menu, Layout, Spin } from "antd";
import type { MenuProps } from "antd";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import { selectEmpProcessing } from "../store/reducers/employeeSlice";
import { selectCafeProcessing } from "../store/reducers/cafeSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  color: "Menu",
  height: "5rem",
  paddingLeft: "5rem",
};

const contentStyle: React.CSSProperties = {
  height: "calc(100vh - 19rem)",
  margin: "5rem",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "rgb(135 135 135)",
  background: "rgb(226 226 226)",
  height: "4rem",
};
export interface ILayout {
  header: JSX.Element;
  children: JSX.Element;
}

const CommenLayout: FC<ILayout> = ({ header, children }) => {
  const navigate = useNavigate();
  const empProcessing = useSelector(selectEmpProcessing);

  const cafeProcessing = useSelector(selectCafeProcessing);

  const items: MenuProps["items"] = [
    {
      label: "Cafes",
      key: "cafes",
      style: { color: "blueviolet" },
      onClick: () => navigate("/"),
    },
    {
      label: "Employees",
      key: "emp",
      style: { color: "blueviolet" },
      onClick: () => navigate("/employee"),
    },
  ];

  return (
    <Layout>
      <Menu mode="horizontal" items={items} style={headerStyle} />
      <Spin
        style={{ zIndex: 1, height: "50%" }}
        spinning={empProcessing || cafeProcessing}
      />
      <Content style={contentStyle} className="ag-theme-alpine">
        {header}
        {children}
      </Content>

      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};

export default CommenLayout;

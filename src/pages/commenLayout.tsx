import React, { FC } from "react";
import { Button, Layout } from "antd";

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  color: "#fff",
  height: "5rem",
  backgroundColor: "#7dbcea",
};

const contentStyle: React.CSSProperties = {
  height: "calc(100vh - 19rem)",
  margin: "5rem",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
  height: "4rem",
};
export interface ILayout {
  header: JSX.Element;
  children: JSX.Element;
}

const CommenLayout: FC<ILayout> = ({ header, children }) => {
  return (
    <Layout>
      <Header style={headerStyle}>{header}</Header>
      <Content style={contentStyle} className="ag-theme-alpine">
        {children}
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};

export default CommenLayout;

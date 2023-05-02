import { FC } from "react";
import { ColDef, ColGroupDef, ICellRendererParams } from "ag-grid-community";
import { useParams, useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import { Button, Space } from "antd";

import CommenLayout from "./commenLayout";

const data = {
  data: [
    {
      Employee_id: 1,
      Name: "Name 1",
      Email_address: "email@gmail.com",
      Phone_number: "0773217165",
      Days: 5,
      Café_name: "cafe name",
    },
    {
      Employee_id: 2,
      Name: "Name 2",
      Email_address: "email@gmail.com",
      Phone_number: "0773217165",
      Days: 5,
      Café_name: "cafe name",
    },
    {
      Employee_id: 3,
      Name: "Name 3",
      Email_address: "email@gmail.com",
      Phone_number: "0773217165",
      Days: 5,
      Café_name: "cafe name",
    },
    {
      Employee_id: 4,
      Name: "Name 4",
      Email_address: "email@gmail.com",
      Phone_number: "0773217165",
      Days: 5,
      Café_name: "cafe name",
    },
    {
      Employee_id: 5,
      Name: "Name 5",
      Email_address: "email@gmail.com",
      Phone_number: "0773217165",
      Days: 5,
      Café_name: "cafe name",
    },
  ],
};
const Employee: FC = () => {
  const { cafeId } = useParams();
  const navigate = useNavigate();

  const columns: (ColDef<any> | ColGroupDef<any>)[] | null = [
    {
      headerName: "Employee Id",
      field: "Employee_id",
    },
    {
      field: "Name",
    },
    {
      headerName: "Email address",
      field: "Email_address",
    },
    {
      headerName: "Phone number",
      field: "Phone_number",
    },
    {
      headerName: "Days worked in the café",
      field: "Days",
    },
    {
      headerName: "Café name",
      field: "Café_name",
    },
    {
      field: "Edit/Delete ",
      cellRenderer: (params: ICellRendererParams<any, any, any>) => (
        <Space wrap>
          <Button
            type="dashed"
            onClick={() =>
              navigate(`/employee/edit/${params.data.Employee_id}`)
            }
          >
            Edit
          </Button>
          <Button type="dashed" danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <CommenLayout
      header={
        <Button type="primary" onClick={() => navigate(`/employee/add`)}>
          Add New Employee
        </Button>
      }
    >
      <AgGridReact columnDefs={columns} rowData={data.data} />
    </CommenLayout>
  );
};

export default Employee;

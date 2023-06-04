import { FC, useEffect, useState } from "react";
import { ColDef, ColGroupDef, ICellRendererParams } from "ag-grid-community";
import { useParams, useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import { Button, Popconfirm, Space } from "antd";

import { getCafeEmployee } from "../services/employee";
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
  const navigate = useNavigate();
  const { cafeId } = useParams();
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    const cafId = parseInt(cafeId ?? "");
    if (cafId) {
      getCafeEmployee(cafId).then((response) => {
        setEmployeeData(response.data);
      });
    }
  }, [cafeId]);

  const columns: (ColDef<any> | ColGroupDef<any>)[] | null = [
    {
      headerName: "Employee Id",
      field: "id",
    },
    {
      headerName: "Name",
      field: "name",
    },
    {
      headerName: "Email address",
      field: "email",
    },
    {
      headerName: "Phone number",
      field: "phone",
    },
    {
      headerName: "Days worked in the café",
      field: "daysWorked",
    },
    {
      headerName: "Café name",
      field: "cafeName",
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
          <Popconfirm
            title="Delete"
            description="Are you sure to delete this record?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => alert("deleted")}
          >
            <Button type="dashed" danger>
              Delete
            </Button>
          </Popconfirm>
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
      <AgGridReact
        columnDefs={columns}
        rowData={employeeData}
        className="employee-table"
      />
    </CommenLayout>
  );
};

export default Employee;

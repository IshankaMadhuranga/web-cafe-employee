import { FC, useEffect } from "react";
import { Button, Space } from "antd";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import { useNavigate } from "react-router-dom";
import { ICellRendererParams, ColDef, ColGroupDef } from "ag-grid-community";

import CommenLayout from "./commenLayout";

const data = {
  data: [
    {
      Logo: "logo",
      Name: "name1",
      Description: "description",
      Employees: "employeess",
      Location: "location",
    },
    {
      Logo: "logo",
      Name: "name2",
      Description: "description",
      Employees: "employeess",
      Location: "location",
    },
    {
      Logo: "logo",
      Name: "name3",
      Description: "description",
      Employees: "employeess",
      Location: "location",
    },
    {
      Logo: "logo",
      Name: "name1",
      Description: "description",
      Employees: "employeess",
      Location: "location",
    },
    {
      Logo: "logo",
      Name: "name2",
      Description: "description",
      Employees: "employeess",
      Location: "location",
    },
    {
      Logo: "logo",
      Name: "name3",
      Description: "description",
      Employees: "employeess",
      Location: "location",
    },
    {
      Logo: "logo",
      Name: "name1",
      Description: "description",
      Employees: "employeess",
      Location: "location",
    },
    {
      Logo: "logo",
      Name: "name2",
      Description: "description",
      Employees: "employeess",
      Location: "location",
    },
    {
      Logo: "logo",
      Name: "name3",
      Description: "description",
      Employees: "employeess",
      Location: "location",
    },
    {
      Logo: "logo",
      Name: "name3",
      Description: "description",
      Employees: "employeess",
      Location: "location",
    },
  ],
};

const Cafe: FC = () => {
  const navigate = useNavigate();

  const columns: (ColDef<any> | ColGroupDef<any>)[] | null = [
    {
      field: "Logo",
    },
    {
      field: "Name",
    },
    {
      field: "Description",
    },
    {
      field: "Employees",
      cellRenderer: (params: ICellRendererParams<any, any, any>) => (
        <>
          <a onClick={() => navigate(`/employee/${Math.random()}`)}>
            {params.value}
          </a>
        </>
      ),
    },
    {
      field: "Location",
    },
    {
      field: "Edit/Delete ",
      cellRenderer: (params: ICellRendererParams<any, any, any>) => (
        <Space wrap>
          <Button
            type="dashed"
            onClick={() => navigate(`/cafe/edit/${params.data.Name}`)}
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

  useEffect(() => {
    console.log("load data");
  }, []);

  return (
    <CommenLayout
      header={
        <Button type="primary" onClick={() => navigate(`/cafe/add`)}>
          Add New Café
        </Button>
      }
    >
      <AgGridReact columnDefs={columns} rowData={data.data} />
    </CommenLayout>
  );
};

export default Cafe;

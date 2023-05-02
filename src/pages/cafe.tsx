import { FC, useEffect } from "react";
import { Button } from "antd";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import { useNavigate } from "react-router-dom";

import CommenLayout from "./commenLayout";
import {
  ColDef,
  ColGroupDef,
} from "ag-grid-community/dist/lib/entities/colDef";
import { ICellRendererParams } from "ag-grid-community";

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
    },
  ];

  useEffect(() => {
    console.log("load data");
  }, []);

  return (
    <CommenLayout header={<Button type="primary">Add New Café</Button>}>
      <AgGridReact columnDefs={columns} rowData={data.data} />
    </CommenLayout>
  );
};

export default Cafe;

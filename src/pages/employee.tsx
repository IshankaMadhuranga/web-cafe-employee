import { FC, useEffect, useState } from "react";
import { ColDef, ColGroupDef, ICellRendererParams } from "ag-grid-community";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import { Button, Popconfirm, Space } from "antd";

import {
  requestDeleteEmployee,
  selectEmployees,
  requestEmployees,
  EmployeeDto,
} from "../store/reducers/employeeSlice";
import { getCafeEmployee } from "../services/employee";
import CommenLayout from "./commenLayout";

const Employee: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cafeId } = useParams();
  const [employeeData, setEmployeeData] = useState<EmployeeDto[] | null>(null);
  const empData = useSelector(selectEmployees);

  useEffect(() => {
    const cafId = parseInt(cafeId ?? "");
    if (cafId) {
      getCafeEmployee(cafId).then((response) => {
        setEmployeeData(response.data);
      });
    } else {
      dispatch(requestEmployees());
    }
  }, [cafeId]);

  useEffect(() => {
    if (empData) {
      setEmployeeData(empData);
    }
  }, [empData]);

  const columns: (ColDef<any> | ColGroupDef<any>)[] | null = [
    {
      headerName: "Employee Id",
      field: "id",
      valueFormatter: (params) => {
        //Format the id
        let val = params.data.id + "";
        while (val.length < 7) val = "0" + val;
        return "UI" + val;
      },
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
              navigate(`/employee/edit/${params.data.id}`, {
                state: params.data,
              })
            }
          >
            Edit
          </Button>
          <Popconfirm
            title="Delete"
            description="Are you sure to delete this record?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => dispatch(requestDeleteEmployee(params.data.id))}
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
        <Button
          type="primary"
          style={{ marginBottom: "1rem" }}
          onClick={() => navigate(`/employee/add`)}
        >
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

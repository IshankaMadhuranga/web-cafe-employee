import { FC, useEffect, useState } from "react";
import { Button, Space, Popconfirm } from "antd";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import { useNavigate } from "react-router-dom";
import { ICellRendererParams, ColDef, ColGroupDef } from "ag-grid-community";
import { useDispatch, useSelector } from "react-redux";
import {
  requestCafe,
  requestDeleteCafe,
  selectCafe,
} from "../store/reducers/cafeSlice";

import CommenLayout from "./commenLayout";

const Cafe: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cafeData = useSelector(selectCafe);

  useEffect(() => {
    dispatch(requestCafe());
  }, []);

  const columns: (ColDef<any> | ColGroupDef<any>)[] | null = [
    {
      headerName: "Name",
      field: "name",
    },
    {
      headerName: "Description",
      field: "description",
    },
    {
      headerName: "Employees",
      field: "totalEmployees",
      cellRenderer: (params: ICellRendererParams<any, any, any>) => (
        <>
          <a onClick={() => navigate(`/employee/${params.data.id.slice(2)}`)}>
            {params.value}
          </a>
        </>
      ),
    },
    {
      headerName: "Location",
      field: "location",
    },
    {
      field: "Edit/Delete ",
      cellRenderer: (params: ICellRendererParams<any, any, any>) => (
        <Space wrap>
          <Button
            type="dashed"
            onClick={() =>
              navigate(`/cafe/edit/${params.data.id.slice(2)}`, {
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
            onConfirm={() =>
              dispatch(requestDeleteCafe(Number(params.data.id.slice(2))))
            }
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
        <Button type="primary" onClick={() => navigate(`/cafe/add`)}>
          Add New Café
        </Button>
      }
    >
      <AgGridReact
        columnDefs={columns}
        rowData={cafeData}
        className="cafe-table"
      />
    </CommenLayout>
  );
};

export default Cafe;

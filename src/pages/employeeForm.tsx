import { FC, useState } from "react";
import { ColDef, ColGroupDef, ICellRendererParams } from "ag-grid-community";
import { useParams } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from "antd";

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
  ],
};

interface IEmployeeForm {
  type: "Edit" | "Add";
}
const EmployeeForm: FC<IEmployeeForm> = ({ type }) => {
  const { empId } = useParams();
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);

  const CustomHeader = () => {
    switch (type) {
      case "Edit":
        return <p>Edit Employee : {empId}</p>;
        break;
      case "Add":
        return <p>Add Employee</p>;
        break;

      default:
        return <p></p>;
        break;
    }
  };

  return (
    <CommenLayout header={CustomHeader()}>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: "Light",
                value: "light",
                children: [{ title: "Bamboo", value: "bamboo" }],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: "zhejiang",
                label: "Zhejiang",
                children: [
                  {
                    value: "hangzhou",
                    label: "Hangzhou",
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </CommenLayout>
  );
};

export default EmployeeForm;

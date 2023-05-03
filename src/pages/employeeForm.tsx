import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Space, Form, Input, InputNumber, Radio, Select } from "antd";

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
  const [componentDisabled] = useState<boolean>(false);

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
  const initialValues = { name: "Ishanka", gender: "male" };
  return (
    <CommenLayout header={CustomHeader()}>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{ maxWidth: "45rem" }}
        initialValues={type == "Edit" ? initialValues : {}}
      >
        <Form.Item label="Name" name="name" required>
          <Input type="text" autoFocus minLength={6} maxLength={10} required />
        </Form.Item>
        <Form.Item label="Email" name="email" required>
          <Input type="email" required />
        </Form.Item>
        <Form.Item label="Phone number" name="phone" required>
          <Input type="tel" required />
        </Form.Item>
        <Form.Item label="Gender" name="gender" required>
          <Radio.Group>
            <Radio value="male"> Male </Radio>
            <Radio value="femail"> Female </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Assigned Cafe" name="cafe">
          <Select>
            <Select.Option value="cafe1">Cafe 1</Select.Option>
            <Select.Option value="cafe2">Cafe 2</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 12 }}>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
          <Button htmlType="reset">Cancel</Button>
        </Form.Item>
      </Form>
    </CommenLayout>
  );
};

export default EmployeeForm;

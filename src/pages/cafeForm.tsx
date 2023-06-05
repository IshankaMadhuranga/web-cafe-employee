import { FC, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Button,
  Popconfirm,
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

interface ICafeForm {
  type: "Edit" | "Add";
}
const CafeForm: FC<ICafeForm> = ({ type }) => {
  const { cafeId } = useParams();
  const navigate = useNavigate();
  const [componentDisabled] = useState<boolean>(false);
  const { TextArea } = Input;

  const CustomHeader = () => {
    switch (type) {
      case "Edit":
        return <h2>Edit cafe : {cafeId}</h2>;
        break;
      case "Add":
        return <h2>Add cafe</h2>;
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
        <Form.Item label="Description" name="discription" required>
          <TextArea rows={8} maxLength={256} required />
        </Form.Item>
        <Form.Item label="Logo" name="logo" required>
          <Input type="file" required />
        </Form.Item>
        <Form.Item label="Location" name="location" required>
          <Input type="text" minLength={6} required />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 12 }}>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>

          <Popconfirm
            title="Save Changes"
            description="Are you sure to undo this changes?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => navigate(-1)}
          >
            <Button htmlType="reset">Cancel</Button>
          </Popconfirm>
        </Form.Item>
      </Form>
    </CommenLayout>
  );
};

export default CafeForm;

import { FC, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Popconfirm, notification, Form, Input } from "antd";

import { addCafe, updateCafe } from "../services/cafe";
import CommenLayout from "./commenLayout";

interface ICafeForm {
  type: "Edit" | "Add";
}
interface CafeTo {
  id: number;
  name: string;
  location: string;
  description: string;
}
const CafeForm: FC<ICafeForm> = ({ type }) => {
  const navigate = useNavigate();
  const Location = useLocation();

  const [componentDisabled] = useState<boolean>(false);
  const [formInitialValues, setFormInitialValues] = useState<
    CafeTo | undefined
  >();
  const [api, contextHolder] = notification.useNotification();
  const { TextArea } = Input;
  const [form] = Form.useForm();

  useEffect(() => {
    if (type == "Edit" && Location.state && !formInitialValues) {
      const { id, location, description, name } = Location.state;

      setFormInitialValues({
        id: Number(id.slice(2)),
        name: name,
        location: location,
        description: description,
      });
    }
  }, [Location.state]);

  useEffect(() => form.resetFields(), [formInitialValues]);

  const openNotification = () => {
    api.success({
      message: `Success`,
      description: `Successfully ${
        type == "Add" ? "added new" : "updated the"
      } cafe!`,
      placement: "topRight",
      onClose: () => navigate("/"),
    });
  };

  const CustomHeader = () => {
    switch (type) {
      case "Edit":
        return <h1>Edit cafe </h1>;
        break;
      case "Add":
        return <h1>Add cafe</h1>;
        break;

      default:
        return <p></p>;
        break;
    }
  };

  return (
    <CommenLayout header={CustomHeader()}>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{ maxWidth: "45rem" }}
        initialValues={type == "Edit" ? formInitialValues : {}}
        onFinish={(values) => {
          if (type == "Edit" && formInitialValues) {
            updateCafe(formInitialValues.id, values).then(() => {
              openNotification();
            });
          } else {
            addCafe(values).then(() => {
              openNotification();
            });
          }
        }}
      >
        <Form.Item label="Name" name="name" required>
          <Input type="text" autoFocus minLength={6} maxLength={10} required />
        </Form.Item>
        <Form.Item label="Description" name="description" required>
          <TextArea rows={8} maxLength={256} required />
        </Form.Item>
        <Form.Item label="Location" name="location" required>
          <Input type="text" minLength={6} required />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 12 }}>
          {contextHolder}
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

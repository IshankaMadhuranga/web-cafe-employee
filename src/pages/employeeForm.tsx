import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Popconfirm,
  Form,
  Input,
  notification,
  Radio,
  Select,
} from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CommenLayout from "./commenLayout";
import { addEmployee, updateEmployee } from "../services/employee";
import { requestCafe, selectCafe } from "../store/reducers/cafeSlice";

interface EmployeeTo {
  name: string;
  email: string;
  phone: string;
  gender: number;
  cafeId: number;
}
interface cafe {
  value: number;
  label: string;
}
interface IEmployeeForm {
  type: "Edit" | "Add";
}
const EmployeeForm: FC<IEmployeeForm> = ({ type }) => {
  const { empId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Location = useLocation();

  const [componentDisabled] = useState<boolean>(false);
  const [formInitialValues, setFormInitialValues] = useState<
    EmployeeTo | undefined
  >();
  const [cafeOptions, setCafeOptions] = useState<cafe[] | undefined>();
  const [form] = Form.useForm();
  const cafeData = useSelector(selectCafe);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (cafeData) {
      const data = cafeData.map((caf): cafe => {
        return { value: Number(caf.id.toString().slice(2)), label: caf.name };
      });
      setCafeOptions(data);
    }
  }, [cafeData]);

  useEffect(() => {
    dispatch(requestCafe());
  }, []);

  useEffect(() => {
    if (type == "Edit" && Location.state && !formInitialValues) {
      const { gender, phone, email, name, cafeId } = Location.state;

      setFormInitialValues({
        name: name,
        email: email,
        phone: phone,
        gender: gender,
        cafeId: cafeId,
      });
    }
  }, [Location.state]);

  useEffect(() => form.resetFields(), [formInitialValues]);

  const openNotification = () => {
    api.success({
      message: `Success`,
      description: `Successfully ${
        type == "Add" ? "added new" : "updated the"
      } employee!`,
      placement: "topRight",
      onClose: () => navigate(-1),
    });
  };

  const CustomHeader = () => {
    switch (type) {
      case "Edit":
        return <h2>Edit Employee </h2>;
        break;
      case "Add":
        return <h2>Add Employee</h2>;
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
          if (type == "Edit" && empId) {
            updateEmployee(Number(empId), values).then(() => {
              openNotification();
            });
          } else {
            addEmployee(values).then(() => {
              openNotification();
            });
          }
        }}
      >
        <Form.Item label="Name" name="name" required>
          <Input type="text" autoFocus minLength={6} maxLength={10} required />
        </Form.Item>
        <Form.Item label="Email" name="email" required>
          <Input type="email" required />
        </Form.Item>
        <Form.Item
          label="Phone number"
          name="phone"
          required
          rules={[
            {
              pattern: new RegExp(
                /[6|8|9]\d{7}|\+65[6|8|9]\d{7}|\+65\s[6|8|9]\d{7}/g
              ),
              message: "Not a valid SG phone number",
            },
          ]}
        >
          <Input type="tel" required />
        </Form.Item>
        <Form.Item label="Gender" name="gender" required>
          <Radio.Group>
            <Radio value={0}> Male </Radio>
            <Radio value={1}> Female </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Assigned Cafe" name="cafeId">
          <Select options={cafeOptions} />
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

export default EmployeeForm;

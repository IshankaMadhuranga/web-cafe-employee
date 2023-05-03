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

interface ICafeForm {
  type: "Edit" | "Add";
}
const CafeForm: FC<ICafeForm> = ({ type }) => {
  const { cafId } = useParams();
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);

  const CustomHeader = () => {
    switch (type) {
      case "Edit":
        return <p>Edit cafe : {cafId}</p>;
        break;
      case "Add":
        return <p>Add cafe</p>;
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
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </CommenLayout>
  );
};

export default CafeForm;

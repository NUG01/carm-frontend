import { Button, Form, Input } from "antd";
import BasicAxios from "../../../services/axios/BasicAxios";
function App() {
  const [form] = Form.useForm();
  async function onFinish(values) {
    const res = await BasicAxios.post("register", values);
    form.resetFields();
  }

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        width: 700,
        padding: "1rem",
        backgroundColor: "rgba(255, 255, 255, 0.93)",
        borderRadius: "0.5rem",
        boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
        border: "1px solid #eee",
      }}
      form={form}
      initialValues={{
        name: "",
        email: "",
        password: "",
        surname: "",
        mobile_number: "",
        // remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off">
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your username!",
            type: "string",
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Surname"
        name="surname"
        rules={[
          {
            required: true,
            message: "Please input your username!",
            type: "string",
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Mobile Number"
        name="mobile_number"
        rules={[
          {
            required: true,
            message: "Please input your username!",
            type: "string",
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your username!",
            type: "email",
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}>
        <Input.Password />
      </Form.Item>
      {/* 
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}>
        <Button
          style={{
            backgroundColor: "#1890ff",
            color: "#fff",
            border: "none",
            borderRadius: "0.5rem",
          }}
          type="primary"
          htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default App;

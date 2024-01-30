import { Button, Checkbox, Form, Input } from "antd";
import BasicAxios from "../../../services/axios/BasicAxios";
import { csrfToken } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
function App() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  async function onFinish(values) {
    await csrfToken();
    try {
      await BasicAxios.post("login", values);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
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
        width: 500,
        padding: "1rem",
        backgroundColor: "rgba(255, 255, 255, 0.93)",
        borderRadius: "0.5rem",
        boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
        border: "1px solid #eee",
      }}
      initialValues={{
        email: "",
        password: "",
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="on">
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
            min: 8,
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
          {t("greeting")}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default App;

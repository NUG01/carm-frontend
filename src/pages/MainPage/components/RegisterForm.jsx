import { Button, Form, Input } from "antd";
import BasicAxios from "../../../services/axios/BasicAxios";
import {useTranslation} from "react-i18next";
function RegisterForm({ setComponent }) {
  const [form] = Form.useForm();
  const {t} = useTranslation();

  async function onFinish(values) {
    await BasicAxios.post("register", values);
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
        label={t("name")}
        name="name"
        rules={[
          {
            required: true,
            message: t("please_input_username"),
            type: "string",
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        label={t("surname")}
        name="surname"
        rules={[
          {
            required: true,
            message: t("please_input_surname"),
            type: "string",
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        label={t("mobile_number")}
        name="mobile_number"
        rules={[
          {
            required: true,
            message: t("please_input_number"),
            type: "string",
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        label={t("email")}
        name="email"
        rules={[
          {
            required: true,
            message: t("please_input_email"),
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
            message: t("please_input_password"),
          },
        ]}>
        <Input.Password />
      </Form.Item>
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
          {t("submit")}
        </Button>
      </Form.Item>
      <div
        onClick={() => {
          setComponent('login');
        }}
        style={{
          color: "#000",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          cursor: "pointer",
          transform: "translate(-1rem, -2rem)",
        }}>
        <span
          style={{
            color: "blue",
          }}>
          {t("login")}
        </span>
      </div>
    </Form>
  );
}

export default RegisterForm;

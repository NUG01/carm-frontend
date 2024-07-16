import { Button, Checkbox, Form, Input } from "antd";
import BasicAxios from "../../../services/axios/BasicAxios";
import { csrfToken } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/auth";

function LoginForm({ setComponent }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  async function onFinish(values) {
    await csrfToken();
    try {
     const {data}= await BasicAxios.post("login", values);
     dispatch(authActions.setUser(data.user));
     dispatch(authActions.setAuthenticated(true));
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
        label={t("email")}
        name="email"
        rules={[
          {
            required: true,
            message: t("please_input_username"),
            type: "email",
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        label={t("password")}
        name="password"
        rules={[
          {
            required: true,
            message: t("please_input_password"),
            min: 8,
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
          {t("greeting")}
        </Button>
      </Form.Item>
      <div
        onClick={() => {
          setComponent('register');
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
          {t("registration")}
        </span>
      </div>
    </Form>
  );
}

export default LoginForm;

// LanguageDropdown.js
import React from "react";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import BasicAxios from "../../services/axios/BasicAxios";

const { Option } = Select;

const LanguageDropdown = () => {
  const { i18n } = useTranslation();

  const handleChange = (value) => {
    BasicAxios.get("lang/" + value).then(
      () => {
        i18n.changeLanguage(value);
        localStorage.setItem("lang", value);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <Select
      defaultValue={
        localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
      }
      style={{ width: 120 }}
      onChange={handleChange}>
      <Option value="en">English</Option>
      <Option value="ru">Русский</Option>
      <Option value="ka">ქართული</Option>
    </Select>
  );
};

export default LanguageDropdown;

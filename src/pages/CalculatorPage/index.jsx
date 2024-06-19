import { useState, useEffect, useRef } from "react";
import BasicAxios from "../../services/axios/BasicAxios";
import { Select, Form, Tag } from "antd";
import { useTranslation } from "react-i18next";

const COPART = 1;
const IAI = 2;

export default function index() {
  const { t } = useTranslation();
  const [rendered, setRendered] = useState(false);
  const [calculatorForm] = Form.useForm();
  const formRef = useRef(null);

  const [copartOptions, setCopartOptions] = useState(null);
  const [iaiOptions, setIaiOptions] = useState(null);

  const [value, setValue] = useState(null);
  const [auction, setAuction] = useState(COPART);
  // const [port, setPort] = useState(null);

  useEffect(() => {
     BasicAxios.get("calculator/index").then(({ data }) => {
      const copartOPts = data.filter((item) => item.auction_id == COPART);
      setCopartOptions(copartOPts);
      setIaiOptions(data.filter((item) => item.auction_id == IAI));

      setRendered(true);
    });
  }, []);

  const submitHandler = (values) => {
    console.log(values);
  };

  console.log(copartOptions && copartOptions[0]?.id);

  return (
    <div className="calculator-form-container">
      <Form
        ref={formRef}
        layout="vertical"
        form={calculatorForm}
        onFinish={submitHandler}
        id="calculator-form"
      >
        <Form.Item label={t("auction")}>
          <Select
            labelInValue
            defaultValue={{ value: auction }}
            style={{
              width: 120,
            }}
            onChange={({ value }) => {
              setAuction(value);
              setValue(null);
            }}
            options={[
              {
                value: 1,
                label:  t("copart"),
              },
              {
                value: 2,
                label: t("iai"),
              },
            ]}
          />
        </Form.Item>
        {rendered && (
          <>
            <Form.Item label={t("port")}  className="port-select">
              <Select
                key={auction}
                showSearch
                filterOption={(input, option) =>
                  option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                allowClear
               
                onChange={(value) => {
                  setValue(
                    (auction == 1 ? copartOptions : iaiOptions).find(
                      (item) => item.id == value,
                    ),
                  );
                }}
                options={(auction == 1 ? copartOptions : iaiOptions)?.map(
                  (item) => {
                    return {
                      value: item.id,
                      label:
                        item.city +
                        " - " +
                        item.state +
                        "  (" +
                        item.port +
                        ")",
                    };
                  },
                )}
              />
            </Form.Item>
            {value && (
              <div
                style={{
                  marginTop: 30,
                }}
              >
                <Tag
                  color="blue"
                  style={{
                    fontSize: 22,
                    padding: "10px 14px",
                  }}
                >
                  ${value?.price}
                </Tag>
              </div>
            )}
          </>
        )}
      </Form>
    </div>
  );
}

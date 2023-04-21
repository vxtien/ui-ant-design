import { Form, Button, Input, Radio } from "antd";
import { fees_data } from "./fees-data";
import { useState } from "react";

const FormSettingFee = () => {
  const [tokenType, setTokenType] = useState("LP");
  const [showLPForm, setShowLPForm] = useState(true);
  const [showStandardForm, setShowStandardForm] = useState(false);
  const [form] = Form.useForm();
  const [requiredToken, setRequiredTokenType] = useState('LP Token')

  const checkNumberInput = (e) => {
    if (e.key !== "Backspace" && e.key !== "." && isNaN(parseInt(e.key))) {
      e.preventDefault();
    }
  };

  const handleLPButtonClick = () => {
    setTokenType("LP");
    setShowLPForm(true);
    setShowStandardForm(false);
  };

  const handleStandardButtonClick = () => {
    setTokenType("Standard");
    setShowLPForm(false);
    setShowStandardForm(true);
  };
  const handleFormSubmit = (values) => {
    console.log('value:',values);
  };
  const onRequiredTypeChange = ({requiredTokenValue}) => {
    setRequiredTokenType(requiredTokenValue)
  }
  return (
    <>
      <Form
        form={form}
        initialValues={{
          requiredTokenValue: requiredToken,
        }}
        onValuesChange={onRequiredTypeChange}
        requiredToken={requiredToken}
      >
        <Form.Item name="requiredTokenValue">
          <Radio.Group>
            <Radio.Button onClick={handleLPButtonClick} value='LP Token'>LP Token</Radio.Button>
            <Radio.Button onClick={handleStandardButtonClick} value>Standard Token</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>

      {tokenType === "LP" && showLPForm && (
        <Form
          onFinish={handleFormSubmit}
          style={{
            paddingTop: 30,
            display: "flex",
            flexDirection: "column",
            gap: 30,
          }}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
        >
          {fees_data.length > 0 &&
            fees_data.map((fees) => (
              <Form.Item label={fees.title} style={{ height: 30 }}>
                <Form.Item
                  name={`${fees.title}-token`}
                  style={{ display: "inline-block", width: 240 }}
                >
                  <Input
                    type="text"
                    inputMode="numeric"
                    style={{ paddingRight: 64, textAlign: "end" }}
                    onKeyDown={checkNumberInput}
                  />
                  <p style={{ position: "relative", top: -26, left: 180 }}>
                    %Token
                  </p>
                </Form.Item>
                <Form.Item
                  style={{
                    display: "inline-block",
                    width: 240,
                    margin: "0 32px",
                  }}
                >
                  <Input
                    style={{ paddingRight: 54, textAlign: "end" }}
                    onKeyDown={checkNumberInput}
                  />
                  <p style={{ position: "relative", top: -26, left: 196 }}>
                    BNB
                  </p>
                </Form.Item>
              </Form.Item>
            ))}
          <Button style={{width:100}} htmlType="submit">
            Update
          </Button>
        </Form>
      )}

      {tokenType === "Standard" && showStandardForm && (
        <Form
          style={{ paddingTop: 30 }}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
        >
          
          <Button>Update</Button>
        </Form>
      )}
    </>
  );
};
export default FormSettingFee;

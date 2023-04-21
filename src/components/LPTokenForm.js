import { Button, Col, Form, Input, Row } from "antd";

const LPTokenForm = () => {
  const handleFormSubmit = (values) => {
    console.log("values:", values);
  };
  return (
    <Form
      onFinish={handleFormSubmit}
      className="form-token"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 8 }}
    >
      <Form.Item name="unlock early fees" label="Unlock Early Fees">
        <Row>
          <Col span={12}>
            <Input suffix="%Token" />
          </Col>
          <Col span={12}>
            <Input suffix="BNB" />
          </Col>
        </Row>
      </Form.Item>

      <Form.Item name="withdraw Fees" label="Withdraw Fees">
        <Row>
          <Col span={12}>
              <Input suffix="%Token" />
          </Col>
          <Col span={12}>
            <Input suffix="BNB" />
          </Col>
        </Row>
      </Form.Item>

      <Form.Item name="relock fees" label="Relock Fees">
        <Row>
          <Col name="%Token" span={12}>
            <Input suffix="%Token" />
          </Col>
          <Col span={12}>
            <Input suffix="BNB" />
          </Col>
        </Row>
      </Form.Item>

      <Form.Item name="increase lock fees" label="Increase Lock Fees">
        <Row>
          <Col span={12}>
            <Input suffix="%Token" />
          </Col>
          <Col span={12}>
            <Input suffix="BNB" />
          </Col>
        </Row>
      </Form.Item>

      <Form.Item name="lock fees" label="Lock Fees">
        <Row>
          <Col span={12}>
            <Input suffix="%Token" />
          </Col>
          <Col span={12}>
            <Input suffix="BNB" />
          </Col>
        </Row>
      </Form.Item>
      <Button htmlType="submit" className="btn-submit">
        Update
      </Button>
    </Form>
  );
};
export default LPTokenForm;

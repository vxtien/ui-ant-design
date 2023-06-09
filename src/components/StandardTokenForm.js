import { Button, Col, Form, Input, Row } from "antd";

const StandardToken = () => {
  const handleFormSubmit = (values) => {
    console.log("values:", values);
  };
  return (
    <Form
      onFinish={handleFormSubmit}
      className="form-token"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 10 }}
    >
      <Form.Item label="Unlock Early Fees">
        <Row className="row-form">
          <Col span={11}>
            <Form.Item name="unlock early fee %token">
              <Input suffix="%Token" />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item name="unlock early fee BNB">
              <Input suffix="BNB" />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item label="Withdraw Fees">
        <Row className="row-form">
          <Col span={11}>
            <Form.Item name="withdraw fee %token">
              <Input suffix="%Token" />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item name="withdraw fee BNB">
              <Input suffix="BNB" />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item label="Relock Fees">
        <Row className="row-form">
          <Col span={11}>
            <Form.Item name="relock fee %token">
              <Input suffix="%Token" />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item name="relock fee BNB">
              <Input suffix="BNB" />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item label="Increase Lock Fees">
        <Row className="row-form">
          <Col span={11}>
            <Form.Item name="increase fee %token">
              <Input suffix="%Token" />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item name="increase fee BNB">
              <Input suffix="BNB" />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item label="Lock Fees">
        <Row className="row-form">
          <Col span={11}>
            <Form.Item name="lock fee %token">
              <Input suffix="%Token" />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item name="lock fee BNB">
              <Input suffix="BNB" />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>
      <Button htmlType="submit" className="btn-submit">
        Update Standard Token
      </Button>
    </Form>
  );
};
export default StandardToken;

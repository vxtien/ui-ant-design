import { Form, Layout, Input, Button } from "antd";
import { Content, Header } from "antd/es/layout/layout";


const SettingFeeReceiver = () => {
  const handleFormSubmit = (values) => {
    console.log("values:", values);
  };
  return (
    <Layout>
      <Header className="header">
        <h1>Fee Setting Receiver</h1>
      </Header>
      <Content className="form-setting-fee-receiver">
        <Form layout="vertical" onFinish={handleFormSubmit} autoComplete="off">
          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Button className="btn" htmlType="submit">
            Update
          </Button>
        </Form>
      </Content>
    </Layout>
  );
};
export default SettingFeeReceiver;

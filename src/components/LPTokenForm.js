import { Button, Col, Form, Input, Row } from "antd";
import { useEffect, useState } from "react";
import { API_URL } from "../api/feesAPI";

const LPToken = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API_URL({
      method: 'get',
      url: 'https://testapi.io/api/vxtien/testapifees'
    })
    .then((response) => setData(response.data))
  }, []);

  const handleFormSubmit = (values) => {
    console.log('value:', values);
  };
  
  const handlePost = () => {
    API_URL({
      method: 'post',
      url: 'https://testapi.io/api/vxtien/testapifees/',
      data: {
        'name': 'test',
        'fees': 0.5
      }
    })
  console.log(data);
  }

  return (
    <Form
      onFinish={handleFormSubmit}
      className="form-token"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 10 }}
    >
      {data.map((item) => (
        <Form.Item label={item.name}>
          <Row className="row-form">
            <Col span={11}>
              <Form.Item name={item.name}>
                <div>
                  <Input suffix="%Token"  value={item.fees} />
                </div>
              </Form.Item>
            </Col>
            <Col span={11}>
            <Form.Item>
              <Input suffix="BNB" />
            </Form.Item>
          </Col>
          </Row>
        </Form.Item>
      ))}

      <Button onClick={handlePost} htmlType="submit" className="btn-submit">
        Update LP Token
      </Button>
    </Form>
  );
};
export default LPToken;

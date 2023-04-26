import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { API_URL } from "../api/feesAPI";

const LPToken = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API_URL({
      method: "get",
      url: "https://testapi.io/api/vxtien/testapifees",
    }).then((response) => setData(response.data));
  }, []);
  
  const handleFormSubmit = (values) => {
    console.log("value:", values);
  };

  const initialValues = {};
  data.forEach((item) => {
    initialValues[item.name] = item.fees;
  });
  console.log('initial', initialValues);


  return (
    <Form
      onFinish={handleFormSubmit}
      className="form-token"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 10 }}
      initialValues={initialValues}
    >
      {data.map((item) => (
        <Form.Item
          name={`${item.name}`}
          label={`${item.name}`}
        >
            <Input
              type="text"
              value={`${item.fees}`}
              suffix="%Token"
            />

        </Form.Item>
      ))}

      <Button htmlType="submit" className="btn-submit">
        Update LP Token
      </Button>
    </Form>
  );
};
export default LPToken;

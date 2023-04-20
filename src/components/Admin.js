import { Layout, Avatar, Menu, Button, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { fees_data } from "./fees-data";
import { Link } from "react-router-dom";

const { Sider, Header, Content } = Layout;

const Addmin = () => {
  const checkNumberInput = (e) => {
    if (e.key !== "Backspace" && e.key !== "." && isNaN(parseInt(e.key))) {
      e.preventDefault();
    }
  }
  return (
    <Layout>
      <Sider className="aside">
        <div className="user">
          <Avatar
            size={60}
            icon={<UserOutlined />}
            style={{ background: "#bfbfbf" }}
          />
          Admin
        </div>
        <Menu
          style={{ color: "#eceff2" }}
          theme="#002e58"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <Link to='./setting-fee'><i className="fa-solid fa-ticket-simple"></i> </Link> ,
              label: "Setting Fee",
            },
            {
              key: "2",
              icon: <Link to='./setting-fee-receiver'><i className="fa-solid fa-gear"></i></Link>,
              label: "Setting Fee Receiver",
            },
            {
              key: "3",
              icon: <Link to='./'><i className="fa-solid fa-gear"></i></Link>,
              label: "Log Out",
            },
          ]}
        >
        </Menu>
      </Sider>

      <Layout style={{ background: "white" }}>
        <Header className="header">
          <h1>Fee Setting</h1>
        </Header>
        <Content style={{ background: "white", paddingLeft: "6%" }}>
          <div className="btn-token">
            <Button>LP Token</Button>
            <Button>Standard Token</Button>
          </div>

          <Form
            style={{ paddingTop: 30}}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
          >
            {fees_data.length > 0 && fees_data.map(fees => (
              <Form.Item label={fees.title} style={{height:48}}>
              <Form.Item style={{ display: "inline-block", width: 200 }}>
                <Input type="text" inputMode="numeric" style={{ paddingRight: 64, textAlign: "end" }} onKeyDown={checkNumberInput}/>
                <p style={{ position: "relative", top: -26, left: 140 }}>
                  %Token
                </p>
              </Form.Item>
              <Form.Item style={{ display: "inline-block", width: 200, margin:'0 32px' }}>
                <Input style={{ paddingRight:54, textAlign: "end" }} onKeyDown={checkNumberInput}/>
                <p style={{ position: "relative", top: -26, left: 156 }}>
                  BNB
                </p>
              </Form.Item>
            </Form.Item>
            ))}
          </Form>

          <Button>Update</Button>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Addmin;

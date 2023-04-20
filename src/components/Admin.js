import { Layout, Avatar, Menu, Button, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Sider, Header, Content } = Layout;

const Addmin = () => {
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
              icon: <i className="fa-solid fa-ticket-simple"></i>,
              label: "Setting Fee",
            },
            {
              key: "2",
              icon: <i className="fa-solid fa-gear"></i>,
              label: "Setting Fee Receiver",
            },
            {
              key: "3",
              icon: <i className="fa-solid fa-gear"></i>,
              label: "Log Out",
            },
          ]}
        />
      </Sider>

      <Layout style={{ background: "white" }}>
        <Header className="header">
          <h1>Fee Setting</h1>
        </Header>
        <Content style={{ background: "white", paddingLeft: "6%" }}>
          <div className="btn-token">
            <button>LP Token</button>
            <button>Standard Token</button>
          </div>

          <Form
            style={{ paddingTop: 30}}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
          >
            <Form.Item label="Unlock Early Fees:">
              <Form.Item style={{ display: "inline-block", width: 200 }}>
                <Input style={{ paddingRight: 64, textAlign: "end" }} />
                <span style={{ position: "relative", top: -26, left: 140 }}>
                  %Token
                </span>
              </Form.Item>
              <Form.Item style={{ display: "inline-block", width: 200 }}>
                <Input style={{ paddingRight:54, textAlign: "end" }} />
                <span style={{ position: "relative", top: -26, left: 156 }}>
                  BNB
                </span>
              </Form.Item>
            </Form.Item>

            <Form.Item label="Withdraw:">
              <Form.Item style={{ display: "inline-block", width: 200 }}>
                <Input style={{ paddingRight: 64, textAlign: "end" }} />
                <span style={{ position: "relative", top: -26, left: 140 }}>
                  %Token
                </span>
              </Form.Item>
              <Form.Item style={{ display: "inline-block", width: 200 }}>
                <Input style={{ paddingRight:54, textAlign: "end" }} />
                <span style={{ position: "relative", top: -26, left: 156 }}>
                  BNB
                </span>
              </Form.Item>
            </Form.Item>

            <Form.Item label="Relock Fees:">
              <Form.Item style={{ display: "inline-block", width: 200 }}>
                <Input style={{ paddingRight: 64, textAlign: "end" }} />
                <span style={{ position: "relative", top: -26, left: 140 }}>
                  %Token
                </span>
              </Form.Item>
              <Form.Item style={{ display: "inline-block", width: 200 }}>
                <Input style={{ paddingRight:54, textAlign: "end" }} />
                <span style={{ position: "relative", top: -26, left: 156 }}>
                  BNB
                </span>
              </Form.Item>
            </Form.Item>

            <Form.Item label="Increase Lock Fees:">
              <Form.Item style={{ display: "inline-block", width: 200 }}>
                <Input style={{ paddingRight: 64, textAlign: "end" }} />
                <span style={{ position: "relative", top: -26, left: 140 }}>
                  %Token
                </span>
              </Form.Item>
              <Form.Item style={{ display: "inline-block", width: 200 }}>
                <Input style={{ paddingRight:54, textAlign: "end" }} />
                <span style={{ position: "relative", top: -26, left: 156 }}>
                  BNB
                </span>
              </Form.Item>
            </Form.Item>

            <Form.Item label="Lock Fees:">
              <Form.Item style={{ display: "inline-block", width: 200 }}>
                <Input style={{ paddingRight: 64, textAlign: "end" }} />
                <span style={{ position: "relative", top: -26, left: 140 }}>
                  %Token
                </span>
              </Form.Item>
              <Form.Item style={{ display: "inline-block", width: 200 }}>
                <Input style={{ paddingRight:54, textAlign: "end" }} />
                <span style={{ position: "relative", top: -26, left: 156 }}>
                  BNB
                </span>
              </Form.Item>
            </Form.Item>
          </Form>

          <Button disabled>Update</Button>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Addmin;

import { Layout, Avatar, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import FormSettingFee from "./Form";

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
              icon: (
                <Link to="/setting-fee">
                  <i className="fa-solid fa-ticket-simple"></i>{" "}
                </Link>
              ),
              label: "Setting Fee",
            },
            {
              key: "2",
              icon: (
                <Link to="/setting-fee-receiver">
                  <i className="fa-solid fa-gear"></i>
                </Link>
              ),
              label: "Setting Fee Receiver",
            },
            {
              key: "3",
              icon: (
                <Link to="/">
                  <i className="fa-solid fa-gear"></i>
                </Link>
              ),
              label: "Log Out",
            },
          ]}
        ></Menu>
      </Sider>

      <Layout>
        <Header className="header">
          <h1>Fee Setting</h1>
        </Header>
        <Content style={{ background: "white", paddingLeft: "6%" }}>
          <FormSettingFee/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Addmin;

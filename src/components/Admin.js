import { Layout, Avatar, Menu, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Sider, Header, Content, } = Layout;

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

      <Layout style={{ background: "white"}}>
        <Header className="header">
          <h1>Fee Setting</h1>
        </Header>
        <Content style={{ background: "white",paddingLeft:'6%' }}>
          <div className="btn-token">
            <button>LP Token</button>
            <button>Standard Token</button>
          </div>
          <div className="convert-fee">
            <div>
              <span className="title">Unlock Early Fees:</span>
              <input className="input-token" />{" "}
              <span className="text-token">%Token</span>
              <input className="input-bnb" />{" "}
              <span className="text-bnb">BNB</span>
            </div>
            <div>
              <span className="title">Withdraw Fees:</span>
              <input className="input-token" />{" "}
              <span className="text-token">%Token</span>
              <input className="input-bnb" />{" "}
              <span className="text-bnb">BNB</span>
            </div>
            <div>
              <span className="title">Relock Fees:</span>
              <input className="input-token" />{" "}
              <span className="text-token">%Token</span>
              <input className="input-bnb" />{" "}
              <span className="text-bnb">BNB</span>
            </div>
            <div>
              <span className="title">Increase Lock Fees:</span>
              <input className="input-token" />{" "}
              <span className="text-token">%Token</span>
              <input className="input-bnb" />{" "}
              <span className="text-bnb">BNB</span>
            </div>
            <div>
              <span className="title">Lock Fees:</span>
              <input className="input-token" />{" "}
              <span className="text-token">%Token</span>
              <input className="input-bnb" />{" "}
              <span className="text-bnb">BNB</span>
            </div>
          </div>

          <Button>Update</Button>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Addmin;

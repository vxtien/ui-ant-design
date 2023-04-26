import { Layout } from "antd";
import FormSettingFee from "./Form";
const { Header, Content } = Layout;

const SettingFee = () => {
  return (
      <Layout>
        <Header className="header">
          <h1>Fee Setting</h1>
        </Header>
        <Content style={{ background: "white", paddingLeft: "6%" }}>
          <FormSettingFee />
        </Content>
      </Layout>
  );
};
export default SettingFee;

import {  Row, Col } from "antd";
import SideLeft from "./SideLeft";
import SideRight from "./SideRight";

const AddminLocker = () => {
  return (
    <Row>
      <Col span={4}>
        <SideLeft/>
      </Col>

      <Col span={20}>
        <SideRight/>
      </Col>
    </Row>
  );
};
export default AddminLocker;

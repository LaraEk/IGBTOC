import React from "react";
import { Layout, Row, Col } from "antd";
import Navbar from "../Navbar/Navbar";

const { Content } = Layout;

class Container extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Content>
            <Row>
              <Col span={6} />
              <Col span={12} className="containercol">
                <Navbar />
              </Col>
              <Col span={6} />
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}
export default Container;

/* <Layout>
          <Content>



            TESTING TESTING 123S
            <h6>
              Note: picture credit to 2015 Aug 30 APOD, a 1955 picture taken by
              Robert Gendler.
            </h6>
          </Content>
        </Layout> */

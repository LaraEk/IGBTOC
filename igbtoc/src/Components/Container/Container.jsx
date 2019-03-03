import React from "react";
import { Layout, Row, Col } from "antd";
import "antd/dist/antd.css";
import Navbar from "../Navbar/Navbar";

const { Content } = Layout;

class Container extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Content>
            <Row>
              <Col span={6}>FIRST EMPTY COLUMN</Col>
              <Col span={10} className="containercol">
                <Navbar />
                MIDDLE COLUMN Note: picture credit to{" "}
                <a href="https://apod.nasa.gov/apod/ap150830.html">
                  2015 Aug 30 APOD
                </a>
                , a 1955 picture taken by Robert Gendler.
              </Col>
              <Col span={6}>BEEP LAST COLUMN</Col>
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

import React from "react";
import { Layout } from "antd";
import Navbar from "./Navbar";

const { Content } = Layout;

class Container extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Content>
            <Navbar />
            TESTING TESTING 123S
            <h6>
              Note: picture credit to 2015 Aug 30 APOD, a 1955 picture taken by
              Robert Gendler.
            </h6>
          </Content>
        </Layout>
      </div>
    );
  }
}
export default Container;

import React from 'react';
import {Layout, theme} from "antd";

const { Content } = Layout;
const Home : React.FC = () => {
    const {
        token: { colorBgContainer, borderRadius },
    } = theme.useToken();

    return(
        <Content
            style={{
                background: colorBgContainer,
                borderRadius: borderRadius,
                padding: 12
            }}
        >
          <h1>Home</h1>
      </Content>
    )
}

export default Home
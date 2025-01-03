import React from "react";
import { Layout, theme } from "antd";
const { Header } = Layout;
const LearnerHeader : React.FC = () => {
    const {token: { colorBgContainer}} = theme.useToken();

    return (
        <Header
            style={{
                padding: 0,
                background: colorBgContainer,
                position: 'fixed',
                zIndex: 1,
                width: '100%',
                height: '60px'
            }}
        />

    )
}

export default LearnerHeader
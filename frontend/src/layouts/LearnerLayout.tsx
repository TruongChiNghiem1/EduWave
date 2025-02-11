import React from 'react';
import { Layout } from 'antd';
import {Outlet} from "react-router-dom";
import Breadcrumbs from "./components/learner/Breadcrumbs.tsx";
import LearnerHeader from "./components/learner/LearnerHeader.tsx";
import LearnerMenu from "./components/learner/LearnerMenu.tsx";

const { Footer } = Layout;

const LearnerLayout: React.FC = () => {
    return (
        <Layout hasSider>
            <LearnerMenu/>
            <Layout style={{ marginInlineStart: 240 }}>
                <LearnerHeader/>
                <Layout
                    style={{
                        marginTop: '60px',
                        padding: '0 12px'
                }}
                >
                    <Breadcrumbs/>
                   <Outlet/>
                </Layout>
                <Footer style={{ textAlign: 'center' }}>
                    EduWave ©{new Date().getFullYear()} Developer by Uyen Quyen & Chi Nghiem
                </Footer>
            </Layout>
        </Layout>
    );
}

export default LearnerLayout;

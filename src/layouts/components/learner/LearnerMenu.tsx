import React, { useState } from 'react';
import {AppstoreOutlined, HomeOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Layout } from 'antd';
import logo from '../../../assets/general/home_logo.png'
import {Link} from "react-router-dom";
const { Sider } = Layout;

const siderStyle: React.CSSProperties = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
};

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: '1',
        icon: <HomeOutlined />,
        label: 'Home page',
    },
    {
        key: '2',
        icon: <HomeOutlined />,
        label: 'Community',
    },
    {
        key: '3',
        icon: <AppstoreOutlined />,
        label: 'My plan',
        children: [
            { key: '4', label: 'My classes' },
            { key: '5', label: 'Exam' },
            { key: '6', label: 'Training Roadmap' },
        ],
    },
    {
        key: '7',
        icon: <AppstoreOutlined />,
        label: 'Training process',
        children: [
            { key: '8', label: 'My Dashboard' },
            { key: '9', label: 'Learning process' },
            { key: '10', label: 'Exam result' },
        ],
    },
    {
        key: '11',
        icon: <SettingOutlined />,
        label: 'Registration',
        children: [
            { key: '12', label: 'E-learning class' },
            { key: '13', label: 'Offline class' },
            { key: '14', label: 'Exam shift' },
        ],
    },
    {
        key: '15',
        icon: <SettingOutlined />,
        label: 'Shared Libraries',
        children: [
            { key: '16', label: 'V-book' },
            { key: '17', label: 'V-Voice' },
            { key: '18', label: 'V-Video' },
        ],
    },
];


const LearnerMenu: React.FC = () => {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return (
        <Sider
            style={siderStyle}
            width={240}
            theme={'light'}
        >
            <Link
                to={'/'}
                className='d-flex justify-content-center w-100 p-2'
            >
                <img
                    src={logo}
                    style={{
                        maxWidth: 145,
                        maxHeight: 45,
                        objectFit: 'cover',
                    }}
                    alt=''
                />
            </Link>

            <Menu
                mode="inline"
                defaultSelectedKeys={['231']}
                defaultOpenKeys={['1', '2', '3', '7', '11', '15']}
                style={{ width: 240 }}
                items={items}
            />
        </Sider>

    );
};

export default LearnerMenu;
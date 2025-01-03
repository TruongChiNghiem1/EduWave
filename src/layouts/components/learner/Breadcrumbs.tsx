import React from 'react';
import { Breadcrumb } from 'antd';
import {HomeOutlined} from "@ant-design/icons";

const Breadcrumbs: React.FC = () => (
    <Breadcrumb
        className='my-2'
        items={[
            {
                href: '',
                title: (
                    <>
                        <HomeOutlined />
                        <span>Home page</span>
                    </>
                ),
            },

        ]}
    />
);

export default Breadcrumbs;
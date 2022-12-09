import {MenuProps, Menu, Button, Col, Row, Layout} from "antd";
import {FC, useState} from "react";

import {
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import { UserInfo } from "./UserInfo";

export const UserMenu: FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const items = [
        {
            label: "a",
            key: "1",
            icon: <MailOutlined/>
        },
        {
            label: "UNO",
            key: "3",
            icon: <MailOutlined/>
        },
        {
            label: "DOS",
            key: "2",
            icon: <MailOutlined/>
        }

    ];

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };
    return (<Layout style={{minHeight: '100vh', width: "50px"}}>
        <Layout.Sider collapsible collapsed={isCollapsed}
                      onCollapse={() => setIsCollapsed(!isCollapsed)} style={{background: "#fff"}}>
            <UserInfo isCollapsed={isCollapsed}/>
            <Menu
                onClick={onClick}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </Layout.Sider>
    </Layout>)
}
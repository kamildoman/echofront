import {MenuProps, Menu, Button, Col, Row, Layout} from "antd";
import {FC, useState} from "react";

import {
    BankOutlined,
    BarChartOutlined,
    CheckSquareOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    RiseOutlined,
    SketchOutlined,
    TrophyOutlined,
    UserOutlined
} from '@ant-design/icons';
import {UserInfo} from "./UserInfo";

export enum userPages {
    achivements = "achivements",
    missions = "missions",
    learning_centre = "learning_centre",
    progress = "progress",
    leaderboards = "leaderboards",
    personal_performance = "personal_performance"
}

export const UserMenu: FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const items = [
        {
            label: "Osiągnięcia",
            key: userPages.achivements,
            icon: <SketchOutlined />
        },
        {
            label: "Misje",
            key: userPages.missions,
            icon: <CheckSquareOutlined />
        },
        {
            label: "Centrum nauki",
            key: userPages.learning_centre,
            icon: <BankOutlined />
        },
        {
            label: "Progres",
            key: userPages.progress,
            icon: <RiseOutlined />
        },
        {
            label: "Tablica wyników",
            key: userPages.leaderboards,
            icon: <TrophyOutlined />
        },
        {
            label: "Statystyki",
            key: userPages.personal_performance,
            icon: <BarChartOutlined />
        },

    ];

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };
    return (
        <Layout.Sider collapsible collapsed={isCollapsed}
                      onCollapse={() => setIsCollapsed(!isCollapsed)} width={"25vw"} theme="light">
            <UserInfo isCollapsed={isCollapsed}/>
            <Menu
                onClick={onClick}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </Layout.Sider>)
}
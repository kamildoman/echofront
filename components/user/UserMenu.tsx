import {MenuProps, Menu, Button, Col, Row, Layout} from "antd";
import {FC} from "react";

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

interface Props {
    isCollapsed: boolean;
    setIsCollapsed: (arg0: boolean) => void;
}

export const UserMenu: FC<Props> = ({isCollapsed, setIsCollapsed}) => {
    const items = [
        {
            label: "Osiągnięcia",
            key: userPages.achivements,
            icon: <SketchOutlined/>
        },
        {
            label: "Misje",
            key: userPages.missions,
            icon: <CheckSquareOutlined/>
        },
        {
            label: "Centrum nauki",
            key: userPages.learning_centre,
            icon: <BankOutlined/>
        },
        {
            label: "Progres",
            key: userPages.progress,
            icon: <RiseOutlined/>
        },
        {
            label: "Tablica wyników",
            key: userPages.leaderboards,
            icon: <TrophyOutlined/>
        },
        {
            label: "Statystyki",
            key: userPages.personal_performance,
            icon: <BarChartOutlined/>
        },

    ];

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };
    return (
        <Layout.Sider collapsible collapsed={isCollapsed}
                      onCollapse={() => setIsCollapsed(!isCollapsed)} theme="light" width="400" collapsedWidth="50"
                      style={{
                          overflow: "auto",
                          height: "100vh",
                          position: "sticky",
                          top: 0,
                          left: 0
                      }}>
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
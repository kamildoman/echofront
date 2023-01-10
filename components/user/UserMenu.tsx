import { Layout, Menu, MenuProps } from "antd";
import { FC } from "react";

import {
  BankOutlined,
  BarChartOutlined,
  CheckSquareOutlined,
  LineChartOutlined,
  RiseOutlined,
  SketchOutlined,
  TrophyOutlined
} from "@ant-design/icons";
import { UserInfo } from "./UserInfo";
import { UserPages } from "../../models/user";
import { useRouter } from "next/router";
import { routes } from "../../config/routes";

interface Props {
  isCollapsed: boolean;
  setIsCollapsed: (arg0: boolean) => void;
  setActivePage: (arg0: UserPages) => void;
}

export const UserMenu: FC<Props> = ({ isCollapsed, setIsCollapsed, setActivePage }) => {
  const router = useRouter();
  const items = [
    {
      label: "Strona główna",
      key: UserPages.main,
      icon: <LineChartOutlined />
    },
    {
      label: "Osiągnięcia",
      key: UserPages.achivements,
      icon: <SketchOutlined />
    },
    {
      label: "Misje",
      key: UserPages.missions,
      icon: <CheckSquareOutlined />
    },
    {
      label: "Centrum nauki",
      key: UserPages.learning_centre,
      icon: <BankOutlined />
    },
    {
      label: "Progres",
      key: UserPages.progress,
      icon: <RiseOutlined />
    },
    {
      label: "Tablica wyników",
      key: UserPages.leaderboards,
      icon: <TrophyOutlined />
    },
    {
      label: "Statystyki",
      key: UserPages.personal_performance,
      icon: <BarChartOutlined />
    }

  ];

  const onClick: MenuProps["onClick"] = (e) => {
    router.push(`/${routes.user}?page=${e.key}`);
    setActivePage(e.key as UserPages);
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
      <UserInfo isCollapsed={isCollapsed} />
      <Menu
        onClick={onClick}
        mode="inline"
        items={items}
      />
    </Layout.Sider>);
};
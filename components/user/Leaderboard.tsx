import { UserOutlined } from "@ant-design/icons";
import {Avatar, Divider, Table, Typography } from "antd";
import { FC } from "react";

export const Leaderboard: FC = () => {
    const leaderboard = [
        {
            username: "Kamil Stoch",
            tasksDone: 12,
            expGained: 375,
            KPI: 98
        }
    ]

    const dataSource = [
        {
            position: 1,
            username: <><Avatar size={30} icon={<UserOutlined/>} /> Kamil Stoch</>,
            tasksDone: 12,
            expGained: 375,
            KPI: 98
        },
        {
            position: 2,
            username: <><Avatar size={30} icon={<UserOutlined/>} /> Jarosław Psikuta</>,
            tasksDone: 10,
            expGained: 315,
            KPI: 91
        },
        {
            position: 3,
            username: <><Avatar size={30} icon={<UserOutlined/>} /> Zdzisłąw Źdźbło</>,
            tasksDone: 9,
            expGained: 311,
            KPI: 90
        },
        {
            position: 4,
            username: <><Avatar size={30} icon={<UserOutlined/>} /> Genowefa Kaszanka</>,
            tasksDone: 3,
            expGained: 275,
            KPI: 70
        },
    ];

    const columns = [
        {
            title: 'Miejsce',
            dataIndex: 'position',
            key: 'position',
            width: 10
        },
        {
            title: 'Pracownik',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Wykonane zadania',
            dataIndex: 'tasksDone',
            key: 'tasksDone',
        },
        {
            title: 'Zdobyte doświadczenie',
            dataIndex: 'expGained',
            key: 'expGained',
        },
        {
            title: 'KPI',
            dataIndex: 'KPI',
            key: 'KPI',
        },
    ];
    return (<div style={{marginTop: "20px"}}>
        <Divider />
        <Typography.Text strong style={{fontSize: "18px"}}>Leaderboard:</Typography.Text>
        <Divider />
        <Table dataSource={dataSource} columns={columns} />;
    </div>)
}
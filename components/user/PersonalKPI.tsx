import {Button, Progress, Row, Typography} from "antd";
import {FC, useState} from "react";
import {Line, G2} from '@ant-design/plots';

export const PersonalKPI: FC = () => {
    const monthlyData = [
        {
            Date: "Styczeń",
            Wynik: 74
        },
        {
            Date: "Luty",
            Wynik: 79
        },
        {
            Date: "Marzec",
            Wynik: 75
        },
        {
            Date: "Kwiecień",
            Wynik: 83
        },
        {
            Date: "Maj",
            Wynik: 69
        },
        {
            Date: "Czerwiec",
            Wynik: 73
        },
    ]

    const weeklyData = [
        {
            Date: "-5",
            Wynik: 74
        },
        {
            Date: "-4",
            Wynik: 95
        },
        {
            Date: "-3",
            Wynik: 65
        },
        {
            Date: "-2",
            Wynik: 83
        },
        {
            Date: "-1",
            Wynik: 39
        },
        {
            Date: "Ten tydzień",
            Wynik: 79
        },
    ]
    const [data, setData] = useState<{ Date: string, Wynik: number }[]>(monthlyData)
    return (<div style={{textAlign: "center"}}>
        <Typography.Text strong style={{height: "150px", fontSize: "18px"}}>Własne KPI:</Typography.Text>
        <DemoLine data={data}/>
        <div style={{marginTop: "10px"}}>
        <Button onClick={() => setData(weeklyData)}>Tydzień</Button>
        <Button onClick={() => setData(monthlyData)}>Miesiąc</Button>
        </div>
    </div>)
}

const DemoLine = ({data}: { data: { Date: string, Wynik: number }[] }) => {
    const config = {
        data,
        xField: 'Date',
        yField: 'Wynik',
        padding: "auto" as "auto",
        height: 250,
        xAxis: {
            tickCount: 5,
        },
    };

    return <Line {...config} />;
};
import {GoldFilled, SignalFilled } from "@ant-design/icons";
import {Col, Progress, Row, Typography} from "antd";
import {FC} from "react";

export const UserProgress: FC = () => {
    const userLevel = 3
    const totalExpNextLevel = 1200
    return (
        <Col style={{width: "100%", textAlign: "center"}}>
            <Row justify="center">
                <Typography.Text strong>Mój progress:</Typography.Text>
            </Row>
                <Progress percent={60} strokeWidth={15} strokeColor={{'0%': '#108ee9', '100%': '#87d068'}}
                          style={{width: "70%", marginBottom: "2px"}}
                          format={(exp) => exp && `${exp * (totalExpNextLevel / 100)}/${totalExpNextLevel} exp`}
                />
            <Col style={{marginTop: "0"}}>
                <GoldFilled title="Liczba złota" style={{color: "gold"}}/><Typography.Text strong> 7</Typography.Text>
                <SignalFilled  title="Miejsce w rankingu" style={{marginLeft: "5px", color: "#87d068"}}/><Typography.Text strong> 4</Typography.Text>

            </Col>

        </Col>
    )
}
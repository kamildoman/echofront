import { Avatar, Col, Row, Typography } from "antd";
import { FC } from "react";
import { CheckCircleFilled, DollarCircleFilled, FundFilled, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { routes } from "../../config/routes";

interface Props {
  isCollapsed: boolean;
}

export const UserInfo: FC<Props> = ({ isCollapsed }) => {
  return (
    <Row justify="center" className="user-info-row">
      {isCollapsed ? <Link href={`${routes.user}/userid`} style={{ width: "100%" }}><UserOutlined
          className="icon-font-size" /></Link> :
        <Link href={`${routes.user}/userid`} style={{ width: "100%" }}>
          <Col className="user-info-col">
            <Avatar size={100}>Kamil</Avatar>
            <Typography.Title style={{ margin: "0" }}>Kamil Domański</Typography.Title>
            <Typography.Text type="success" strong>Poziom 4</Typography.Text>
            <Typography.Text>Księgowy w Echo sp. z.o.o</Typography.Text>
            <Typography.Text strong style={{ marginBottom: "5px" }}>Osiągnięcia:</Typography.Text>
            <Row>
              <DollarCircleFilled className="achievement" title="Pracownik miesiąca!" />
              <CheckCircleFilled style={{ color: "#00543b" }} className="achievement"
                                 title="Zadanie wykonane!" />
              <FundFilled style={{ color: "#006eb0" }} className="achievement" title="Coraz lepszy!" />
            </Row>
          </Col>
        </Link>}
    </Row>
  );
};
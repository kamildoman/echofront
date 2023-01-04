import { Card, Col, Row, Typography } from "antd";
import { FC } from "react";
import { PersonalKPI } from "../user/PersonalKPI";
import { Tasks } from "../user/Tasks";

export const SingleUserBottomRow: FC = () => {
  return <Row className="center-div">
    <Typography.Title>Aktualności</Typography.Title>
    <Row justify="space-between">
      <Col xs={24} md={12} xl={8}>
        <Card title="KPI">
          <PersonalKPI />
        </Card>
      </Col>
      <Col xs={24} md={12} xl={8}>
        <Card title="Zadania">
          <Tasks />
        </Card>
      </Col>
      <Col xs={24} md={12} xl={8}>
        <Card title="Nauka">
          // TODO
        </Card>
      </Col>
    </Row>
  </Row>;
}
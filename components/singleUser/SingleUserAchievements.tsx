import { CheckCircleFilled, DollarCircleFilled, FundFilled } from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
import { FC } from "react";

const getAchievements = (achievementClass: string) => {
  return [
    {
      icon: <DollarCircleFilled className={achievementClass} />,
      title: "Pracownik miesiąca",
      description: "Nagroda przyznana w dniu 31.02.2021 z wynikiem 21378818 za najgłębsze wchodzenie w dupę szefowi!"
    },
    {
      icon: <CheckCircleFilled style={{ color: "#00543b" }} className={achievementClass} />,
      title: "Zadanie wykonane",
      description: "Nagroda przyznana w dniu 17.03.2021 za zrobienie swojego pierwszego zadania którym było: 'Zamknij ryja młody i słuchaj'!"
    },
    {
      icon: <FundFilled style={{ color: "#006eb0" }} className={achievementClass} />,
      title: "Coraz lepszy",
      description: "Nagroda przyznana w dniu 01.04.2021 za osiągnięcie lepszych wyników niż w poprzednim miesiącu w kategorii: Robienie kupy!"
    }
  ];
};

export const SingleUserAchievements: FC = () => {
  return <Row className="center-div">
    <Typography.Title>Osiągnięcia</Typography.Title>
    <Row justify="space-between">
      {getAchievements("achievement-big").map((achievement, key) => (
        <Col xs={24} md={11} xl={7} key={key}>
          <Card cover={achievement.icon} style={{height: "17rem", marginBottom: "1rem"}}>
            <Typography.Paragraph strong>{achievement.title}</Typography.Paragraph>
            <Typography.Text>{achievement.description}</Typography.Text>
          </Card>
        </Col>
      ))}
    </Row>
  </Row>;
};
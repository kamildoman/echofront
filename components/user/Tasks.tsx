import { InfoCircleOutlined } from "@ant-design/icons";
import { Popover, Progress, Row, Typography } from "antd";
import { FC } from "react";

const tasks = [
  {
    title: "Umyć naczynia",
    description: "Włożyć talerz do zlewu, zalać wodą, a następnie zawołać żonę żeby umyła naczynia",
    percent: 60
  },
  {
    title: "Wypić piwo",
    description: "Weź piwo, otwórz piwo, wypij piwo, operację powtarzać do skutku",
    percent: 90
  },
  {
    title: "Uwolnić orkę",
    description: "Usiądź na kiblu i ciśnij mocno. Jeśli się nie udało spróbuj ponownie ze ściągniętymi spodniami",
    percent: 10
  }
];

export const Tasks: FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      {tasks.map((task, key) => (
        <Row className="center-div" style={{ cursor: "pointer" }} key={key}>
          <Row justify="center" style={{ marginTop: "15px" }}>
            <Typography.Text strong>{task.title}
              <Popover content={task.description} title={task.title} trigger="hover">
                <InfoCircleOutlined style={{marginLeft: "5px"}}/>
              </Popover>
            </Typography.Text>
          </Row>
          <Progress percent={task.percent} strokeWidth={15}
                    style={{ width: "70%", marginBottom: "2px", margin: "0 auto" }}
          />
        </Row>

      ))}
    </div>);
};
import { FC, useState } from "react";
import { Button, Card, Checkbox, Col, Dropdown, Form, Row, Typography } from "antd";
import { CheckCircleFilled, ControlOutlined, DollarCircleFilled, FundFilled } from "@ant-design/icons";

const getAchievements = (achievementClass: string) => {
  return [
    {
      level: 1,
      items: [
        {
          icon: <DollarCircleFilled className={achievementClass} />,
          title: "Pracownik miesiąca",
          description: "Nagroda przyznana w dniu 31.02.2021 z wynikiem 21378818 za najgłębsze wchodzenie w dupę szefowi!"
        },
        {
          icon: <FundFilled style={{ color: "#006eb0" }} className={achievementClass} />,
          title: "Coraz lepszy",
          description: "Nagroda przyznana w dniu 01.04.2021 za osiągnięcie lepszych wyników niż w poprzednim miesiącu w kategorii: Robienie kupy!"
        }
      ]
    },
    {
      level: 2,
      items: [
        {
          icon: <DollarCircleFilled className={achievementClass} />,
          title: "dupa dupa",
          description: "i rzekł tedy beliar do innej istoty, ale adanos zesłał potężną falę która zmyła go z powierzchni ziemii"
        },
        {
          icon: <CheckCircleFilled style={{ color: "#940000" }} className={achievementClass} />,
          title: "Mango",
          description: "Mango to owoc choć niektórzy twierdzą, że to nie owoc, choć tak naprawdę to owoc"
        },
        {
          icon: <FundFilled style={{ color: "#82858c" }} className={achievementClass} />,
          title: "Placuszki",
          description: "Nie chce mi się wymyślać nic śmiesznego więc piszę byle co, żeby to jakoś wyglądało jakby miało sens. Ciekawe czy dobrym pomysłem będzie napisanie tu czegoś dłuższego i czy to nie zjebie przy okazji całej strony blablaldla s lsal lasls al sal slals l sal sals al sals al sal salsa ls als alsa lsl sal ls alsa ls als al sals als alsa ls als alsal sl a"
        }
      ]
    },
    {
      level: 3,
      items: [
        {
          icon: <DollarCircleFilled className={achievementClass} />,
          title: "Level tszy",
          description: "Tszy wszy bszy gszy kapusta majonez skrzydełka"
        },
        {
          icon: <CheckCircleFilled style={{ color: "#adad00" }} className={achievementClass} />,
          title: "Podmiot liryczny",
          description: "Podmiotem lirycznym w tym oto zdaniu jest podmiot liryczny"
        },
        {
          icon: <FundFilled style={{ color: "#cdfceb" }} className={achievementClass} />,
          title: "Siano",
          description: "Bateria w myszce się wyładowała, tego się cała Polska bała"
        }
      ]
    },
    {
      level: 4,
      items: [
        {
          icon: <DollarCircleFilled className={achievementClass} />,
          title: "Już chyba łatwiej",
          description: "Byłoby zrobić ten backend niż wymyślać tep ierdoły"
        },
        {
          icon: <CheckCircleFilled style={{ color: "#659cbe" }} className={achievementClass} />,
          title: "Maszynka do golenia",
          description: "Wół go pyta: panie chrząszczu, po co pan tak brzęczy w gąszczu?"
        },
        {
          icon: <FundFilled style={{ color: "#adad00" }} className={achievementClass} />,
          title: "Jak to po co?",
          description: "To jest praca, każda praca się opłaca"
        },
        {
          icon: <CheckCircleFilled style={{ color: "#659cbe" }} className={achievementClass} />,
          title: "A cóż za to pan dostaje?",
          description: "Też pytanie. Wszystkie gaje! Wszystkie trzciny po wsze czasy, łąki, pola, oraz lasy"
        },
        {
          icon: <DollarCircleFilled className={achievementClass} />,
          title: "Serio?",
          description: "Nawet rzeczki, nawet zdroje, wszystko to jest właśnie moje!"
        }
      ]
    }

  ];
};

export const Achievements: FC = () => {
  const [form] = Form.useForm();
  const [achievements, setAchievements] = useState(getAchievements("achievement-big"));

  const onFinish = (formData: any) => {
    const filtered = getAchievements("achievement-big").filter(
      (achievement) => formData[achievement.level]);
    setAchievements(filtered)
  };
  return (
    <div style={{ textAlign: "right", width: "90%", marginLeft: "5%" }}>
      <Dropdown
        arrow
        trigger={["click"]}
        dropdownRender={() => (
          <div style={{ backgroundColor: "white", padding: "10px", boxShadow: "10px 10px 20px 5px rgba(0, 0, 0, 0.5)" }}>
            <Form form={form} name="filterAchievements" onFinish={onFinish}>
              {getAchievements("achievement-big").map((achievement, key) => {
                return (<Form.Item key={key} initialValue={true} name={achievement.level} valuePropName="checked" noStyle>
                  <Checkbox>
                    Poziom {achievement.level}
                  </Checkbox>
                </Form.Item>);
              })}
              <Button type="primary" onClick={form.submit}>Ok</Button>
            </Form>

          </div>
        )}
      >
        <ControlOutlined style={{ fontSize: "40px", cursor: "pointer" }} />
      </Dropdown>
      {
        achievements.map((achievement, key) => (
          <Col xl={24} style={{ textAlign: "center", display: "flex", justifyContent: "center" }} key={key}>
            <Card title={`Poziom ${achievement.level}`} style={{ marginTop: "3rem" }}>
              <Row justify="center">
                {
                  achievement.items.map((item, key) => (
                    <Col xs={24} md={11} xl={7} key={key}>
                      <Card cover={item.icon} style={{ margin: "0 5px 5px 5px" }}>
                        <Typography.Paragraph strong>{item.title}</Typography.Paragraph>
                        <Typography.Text>{item.description}</Typography.Text>
                      </Card>
                    </Col>
                  ))
                }
              </Row>
            </Card>
          </Col>
        ))
      }
    </div>
  );
};
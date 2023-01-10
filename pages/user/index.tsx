import { Col, Layout, Row } from "antd";
import { useRouter } from "next/router";
import { FC, useState, useEffect } from "react";
import { Achievements } from "../../components/user/pages/Achievements";
import { Main } from "../../components/user/pages/Main";
import { UserMenu } from "../../components/user/UserMenu";
import { UserProgress } from "../../components/user/UserProgress";
import { UserPages } from "../../models/user";

const User: FC = () => {
  const router = useRouter();
  const testa = router.query.page ?? UserPages.main
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activePage, setActivePage] = useState(router.query.page ?? UserPages.main)

  useEffect(() => {
    if (router.query.page) {
      setActivePage(router.query.page)
    }
  }, [router.query])

  let content;
  switch (activePage) {
    case UserPages.main:
      content = <Main />;
      break;
    case UserPages.achivements:
      content = <Achievements />;
      break;
    default:
      content = null;
  }

  return (<Layout style={{ minHeight: "100vh" }}>
    <UserMenu isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} setActivePage={setActivePage}/>
    <Col className={isCollapsed ? "user-info" : "not-collapsed-user-info"}>
      <UserProgress />
      <Row style={{ width: "100%", marginTop: "5%", justifyContent: "space-between" }}>
        {content}
      </Row>
    </Col>
  </Layout>);
};

export default User;
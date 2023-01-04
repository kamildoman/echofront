import { ArrowLeftOutlined } from "@ant-design/icons";
import { Card, Col, Layout, Row } from "antd";
import Link from "next/link";
import { FC } from "react";
import { SingleUserAchievements } from "../../../components/singleUser/SingleUserAchievements";
import { SingleUserBottomRow } from "../../../components/singleUser/SingleUserBottomRow";
import { SingleUserTopRow } from "../../../components/singleUser/SingleUserTopRow";
import { routes } from "../../../config/routes";

const SingleUser: FC = () => {
  return (
    <Layout>
      <Link href={routes.user}><ArrowLeftOutlined style={{marginLeft: "5px", fontSize: "200%"}}/></Link>
      <Layout style={{ minHeight: "100vh", padding: "3% 10%" }}>
        <SingleUserTopRow />
        <SingleUserAchievements />
        <SingleUserBottomRow />
      </Layout>
    </Layout>);
};

export default SingleUser;
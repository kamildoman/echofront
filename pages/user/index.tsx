import {Col, Layout, Row} from "antd";
import {FC, useState} from "react";
import { UserMenu } from "../../components/user/UserMenu";
import { UserProgress } from "../../components/user/UserProgress";

const User: FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    return (<Layout style={{minHeight: "100vh"}}>
        <UserMenu isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
        <Row className={isCollapsed ? "user-info" : "not-collapsed-user-info"}>
           <UserProgress />
        </Row>
    </Layout>)
}

export default User;
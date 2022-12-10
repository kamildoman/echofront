import {Col, Layout, Row} from "antd";
import {FC} from "react";
import { UserMenu } from "../../components/user/UserMenu";

const User: FC = () => {
    return (<Layout style={{minHeight: "100vh"}}>
        <UserMenu/>
        <Row style={{backgroundColor: "blue", width: "100%"}}>
            bbb
        </Row>
    </Layout>)
}

export default User;
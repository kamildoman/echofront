import {Col, Row} from "antd";
import {FC} from "react";
import { UserMenu } from "../../components/user/UserMenu";

const User: FC = () => {
    return (<Row>
        <UserMenu/>
        <Col md={15} style={{backgroundColor: "blue"}}>
            bbb
        </Col>
    </Row>)
}

export default User;
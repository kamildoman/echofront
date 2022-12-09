import {Col, Row} from "antd";
import {FC} from "react";
import {
    UserOutlined
} from '@ant-design/icons';

interface Props {
    isCollapsed: boolean;
}

export const UserInfo: FC<Props> = ({isCollapsed}) => {
    return (
        <Row justify="center" className="user-info-row">
            {isCollapsed ? <UserOutlined className="icon-font-size"/> : <Col>
                <Row>blabla</Row>
                <Row>blabla</Row>
                <Row>blabla</Row>
            </Col>}
        </Row>
    )
}
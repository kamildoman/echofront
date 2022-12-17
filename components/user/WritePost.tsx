import {CommentOutlined, LikeOutlined, UserOutlined} from "@ant-design/icons";
import {Avatar, Button, Col, Input, Row, Typography} from "antd";
import {FC, useState} from "react";
import { SinglePostInterface } from "../../models/user";

interface Props {
    username: string;
    company: string;
    posts: SinglePostInterface[];
    setPosts: (arg0: SinglePostInterface[]) => void;
}

export const WritePost: FC<Props> = ({username, company, posts, setPosts}) => {
    const [postContent, setPostContent] = useState("")

    const writePost = () => {
        setPosts([
            {
                username,
                company,
                postContent,
                comments: []
            },
            ...posts
        ])
        setPostContent("")
    }
    return (<Row className="single-post">
        <Row style={{width: "100%", marginBottom: "12px"}} align="middle">
            <Avatar shape="square" size={50} icon={<UserOutlined/>}/>
            <Col style={{display: "flex", flexDirection: "column"}}>
                <Typography.Text style={{margin: "0 0 0 12px"}} strong>{username}</Typography.Text>
                <Typography.Text style={{margin: "0 0 0 12px"}}>{company}</Typography.Text>
            </Col>

        </Row>
        <Row style={{width: "100%"}}>
            <Input.TextArea placeholder="Napisz swój post" value={postContent}
                            onChange={(e) => setPostContent(e.target.value)}/>
        </Row>
        <Button type="primary" disabled={postContent.length === 0} style={{marginTop: "8px"}}
                onClick={writePost}>Wyślij</Button>
    </Row>)
}
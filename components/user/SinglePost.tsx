import {CommentOutlined, LikeOutlined, UserOutlined} from "@ant-design/icons";
import {Avatar, Col, Input, Row, Typography} from "antd";
import {FC, useState} from "react";
import {SingleComment, SinglePostInterface} from "../../models/user";

interface Props {
    post: SinglePostInterface;
    posts: SinglePostInterface[];
    setPosts: (arg0: SinglePostInterface[]) => void;
}

export const SinglePost: FC<Props> = ({post, setPosts, posts}) => {
    const [likeNumber, setLikeNumber] = useState(0);
    const [commentToAdd, setCommentToAdd] = useState("")
    const [showComments, setShowComments] = useState(false);

    const postComment = () => {
        if (commentToAdd) {
            const newState = posts.map(obj => {
                if (obj === post) {
                    return {
                        ...obj,
                        comments: [
                            {
                                username: "Przykładowy user",
                                commentContent: commentToAdd
                            },
                            ...post.comments
                        ]
                    };
                }

                return obj;
            });

            setPosts(newState);
            setCommentToAdd("")
        }

    }
    return (<Row className="single-post">
        <Row style={{width: "100%", marginBottom: "12px"}} align="middle">
            <Avatar shape="square" size={50} icon={<UserOutlined/>}/>
            <Col style={{display: "flex", flexDirection: "column"}}>
                <Typography.Text style={{margin: "0 0 0 12px"}} strong>{post.username}</Typography.Text>
                <Typography.Text style={{margin: "0 0 0 12px"}}>{post.company}</Typography.Text>
            </Col>

        </Row>
        <Row style={{width: "100%"}}>
            {post.postContent}
        </Row>
        <Row className="post-reactions">
            {likeNumber}<LikeOutlined
            style={{marginRight: "10%", marginLeft: "4px", cursor: "pointer"}}
            onClick={() => setLikeNumber(likeNumber + 1)}/>
            {post.comments.length}<CommentOutlined style={{cursor: "pointer", marginLeft: "4px"}}
                                                   onClick={() => setShowComments(!showComments)}/>
        </Row>
        {showComments && <Row style={{width: "100%", marginTop: "10px", display: "flex"}}>
            <Avatar shape="square" size={35} icon={<UserOutlined/>}/>
            <Input style={{flex: "1", marginLeft: "10px"}} value={commentToAdd}
                   onChange={(e) => setCommentToAdd(e.target.value)}
                   onKeyPress={(e) => e.key === "Enter" && postComment()}/>
            {post.comments.map((comment, key) => (
                <Row style={{width: "100%", marginTop: "8px"}} key={key} align="middle">
                    <Avatar shape="square" size={35} icon={<UserOutlined/>}/>
                    <Col style={{display: "flex", flexDirection: "column"}}>
                        <Typography.Text style={{margin: "0 0 0 12px"}} strong>{comment.username}</Typography.Text>
                        <Typography.Text style={{margin: "0 0 0 12px"}}>{comment.commentContent}</Typography.Text>
                    </Col>

                </Row>
            ))}

        </Row>}
    </Row>)
}
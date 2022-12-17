export interface SinglePostInterface {
    username: string;
    company: string;
    postContent: string;
    comments: SingleComment[];
}

export interface SingleComment {
    username: string,
    commentContent: string;
}
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

export enum UserPages {
    main = "main",
    achivements = "achivements",
    missions = "missions",
    learning_centre = "learning_centre",
    progress = "progress",
    leaderboards = "leaderboards",
    personal_performance = "personal_performance"
}
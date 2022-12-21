import {Col, Layout, Row} from "antd";
import {FC, useState} from "react";
import { Leaderboard } from "../../components/user/Leaderboard";
import { PersonalKPI } from "../../components/user/PersonalKPI";
import { SinglePost } from "../../components/user/SinglePost";
import { UserMenu } from "../../components/user/UserMenu";
import { UserProgress } from "../../components/user/UserProgress";
import { WritePost } from "../../components/user/WritePost";
import { SinglePostInterface } from "../../models/user";

const User: FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [posts, setPosts] = useState<SinglePostInterface[]>([
        {
            username: "Kamil Domański",
            company: "Echo sp. z o.o.",
            postContent: "Biorę urlop od jutra na 7 lat",
            comments: [
                {
                    username: "Grzegorz Brzęczyszczykiewicz",
                    commentContent: "Dziękuję za informację. Pozdrawiam Cieplutko!"
                }
            ]
        },
        {
            username: "Adam Małysz",
            company: "sko.ki",
            postContent: "Jak wycentrować diva w css?",
            comments: [
                {
                    username: "Jane Ahonen",
                    commentContent: "Było wałkowane tysiące razy. Temat zamykam"
                },
                {
                    username: "Adam Małysz",
                    commentContent: "Ok, już znalazłem jak. I oczywiście się tym nie podzielę."
                }
            ]
        },
        {
            username: "Komendant Policji",
            company: "Policja s.a.",
            postContent: "A walnę bazuką w pokoju, co może pójść nie tak?",
            comments: [
                {
                    username: "Andrzej Duda",
                    commentContent: "Nie podpuszczam, ale nie zrobisz tego"
                },
                {
                    username: "Calineczka",
                    commentContent: "O kurwa, co tak jebło?"
                }
            ]
        },
        {
            username: "Robert Lewandowski",
            company: "Huawei sp. z o.o.",
            postContent: "Ich spreche nicht deutsch, ich habla espanol!",
            comments: [
                {
                    username: "Czesław Michniewicz",
                    commentContent: "Laga na lewego, wypij kolego"
                }
            ]
        },
        {
            username: "Elon Musk",
            company: "Twitter s.a.",
            postContent: "Jak wam się uda to was kupię",
            comments: []

        },
        {
            username: "Ramzes II",
            company: "Piramida spb",
            postContent: "Po co motywować pracowników w ten sposób, jak można ich napierdalać?",
            comments: [
                {
                    username: "Józef Stalin",
                    commentContent: "Albo zabijać"
                }
            ]
        },
        {
            username: "Kubuś Puchatek",
            company: "Zakazane miasto zoo",
            postContent: "Proszę mnie nie obrażać i nie porównywać do prezydenta!",
            comments: [
                {
                    username: "Prosiaczek",
                    commentContent: "Pij nie pierdol"
                }
            ]
        },
        {
            username: "Mariusz Pudzianowski",
            company: "kutarate s.a.",
            postContent: "Napisałbym post, ale to by i tak nic nie dało",
            comments: [
                {
                    username: "Juras Jurkowski",
                    commentContent: "Kłopoty! Kłopoty Najmana!"
                }
            ]
        },
        {
            username: "Xi JinPing",
            company: "hiny s.a.",
            postContent: "Za możliwość swobodnego pisania swoich myśli -50 credit score",
            comments: [
                {
                    username: "ocenzurowany-użytkownik",
                    commentContent: "ocenzurowany-komentarz"
                }
            ]
        },
        {
            username: "Janusz Koran-Mekka",
            company: "<5% sp. z o.o.>",
            postContent: "Już w Cesarstwie Rzymskim Hitler mówił o tym, że kobiety nie powinny mieć prawa głosu, a globalne ocieplenie zostało wymyślone przez tfu ekologów",
            comments: [
                {
                    username: "Wipler",
                    commentContent: "Do takich postów lubię pałować wiplera!"
                }
            ]
        },
    ])

    return (<Layout style={{minHeight: "100vh"}}>
        <UserMenu isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
        <Col className={isCollapsed ? "user-info" : "not-collapsed-user-info"}>
           <UserProgress />
            <Row style={{width: "100%", marginTop: "5%", justifyContent: "space-between"}}>
                <Col className="wall-info-col">
                    <WritePost username="Przykładowy user" company="przykładowa firma" posts={posts} setPosts={setPosts}/>
                    {posts.map((post, key) => (
                        <SinglePost post={post} key={key} setPosts={setPosts} posts={posts}/>
                    ))}
               </Col>
                <Col className="wall-info-col">
                    <PersonalKPI />
                    <Leaderboard />
                </Col>
            </Row>
        </Col>
    </Layout>)
}

export default User;
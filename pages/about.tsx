import Layout from '../components/Layout';
import Head from 'next/head';

export default function About() {
    return (
        <Layout>
            <div className="container mx-auto py-8 prose dark:prose-dark prose-purple">
                <Head>
                    <title>About - clacking.net</title>
                </Head>
                <h1>Toya Kinoshita</h1>
                <p>
                    I'm interested in programming especially Software, Web
                    and I like geeky/nerdly techs.
                </p>
                <h2>Links/Contacts</h2>
                <p>
                    Twitter: <a href="https://twitter.com/comfykb">@comfykb</a>
                </p>
                <p>
                    Github: <a href="https://github.com/clacking">clacking</a>
                </p>
                <p>
                    Gitlab: <a href="https://gitlab.com/clacking">clacking</a>
                </p>
                <p>
                    Email: click[at]clacking.net (Alt. comfykeyboard[at]gmail.com) [<a href="https://keybase.io/clacking/pgp_keys.asc">PGP</a>]
                </p>
                <p>
                    Discord: clacking#1396
                </p>
                <h2>Skills</h2>
                <h3>Programming</h3>
                <h4>Languages</h4>
                <p>Javascript, TypeScript, C++, Rust, Python</p>
                <h4>Framework, Library, other</h4>
                <p>Electron, Express.js, Nest.js, Next.js, React.js, Vue</p>
                <h2>Works</h2>
                <h3>Research</h3>
                <h4></h4>
                <p></p>
                <h3>papers</h3>
                <ol>
                    <li>木下 透弥, 久松 潤之, "WebRTCを用いた低遅延ライブストリーミング方式の検討" 電気学会研究会資料. IS / 情報システム研究会, pp. 11.-16., June 2020</li>
                </ol>
                <h3>applications</h3>
                <ul>
                    <li>https://github.com/clacking/raffle - Multiplayer Raffle Game</li>
                </ul>
            </div>
        </Layout>
    );
}

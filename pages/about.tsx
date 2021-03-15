import Layout from '../components/Layout';
import Head from 'next/head';

export default function About() {
    return (
        <Layout>
            <div className="py-8 mx-auto prose dark:prose-dark prose-purple">
                <Head>
                    <title>About - clacking.net</title>
                </Head>
                <h1>
                    木下 透弥 (Toya Kinoshita)
                </h1>
                <p>
                    ソフトウェアやウェブ関係の開発、プログラミングに興味があります。
                </p>
                <ul>
                    <li>2020.04 ~ 現在 大阪電気通信大学 大学院 総合情報学研究科 修士課程 久松研究室</li>
                </ul>
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
                <h4>Javascript, TypeScript, Nest.js, Nuxt.js, Electron, AWS, Docker, Postgres</h4>
                <p>
                    案件としてフロントエンドにNuxt.js、バックエンドにNest.jsを用いたサービスの開発を行いました。<br />
                    また、サービス専用のデスクトップクライアントとしてElectronと、フロントエンドと同様のNuxt.jsを用いました。<br />
                    このサービスのインフラとしてAWSのECSやS3などを用いました。
                </p>
                <h4>Ohter</h4>
                <p>Rust, Python, Next.js, ...</p>
                <h2>Works</h2>
                <h3>Research</h3>
                <h4>WebRTCを用いた低遅延ライブストリーミング</h4>
                <p>
                    近年ではウェブでのライブストリーミングが増えており、ライブストリーミングでは
                    不特定多数の視聴者がおり、ライブストリーミング中に、視聴者とのコミュニケーションをリアルタイムに取りたいという要求がある。<br />
                    MPEG-DASH や HLS を用いた現状のライブストリーミング手法は、シンプルで、 HTTP にて多くのクライアントでもスケールしやすいが、
                    遅延があり配信者と視聴者のリアルタイムのコミュニケーションまでは考慮していない。<br />
                    そのため、 WebRTC を用いウェブでの低遅延ライブストリーミングシステムの開発を行った。<br />
                    配信者は OBS のような一般的な配信ツールを用いれるように、 RTMP でのサーバーへパブリッシュを可能にし、サーバーより視聴者へ
                    WebRTC で配信を届ける。
                    <div className="italic font-extralight text-right m-0">Node.js, WebRTC, Video Streaming</div>
                </p>
                <h4>IoT を用いた安価な ホームオートメーションシステムの実現</h4>
                <p>
                    現代では Internet of Things (IoT) を用いたスマートホームシステム、<br />
                    ホームオートメーションシステムが注目されている。<br />
                    しかしホームオートメーションシステムを実装された住宅、またはシステムを実装する為の<br />
                    工事をするのはコストがかかるなど難易度が高い。<br />
                    本稿では、個人で費用を抑えながらも工事など難易度の高くなる作業をすることなく、<br />
                    コンポーネントシステムによりデータの扱いを汎用性のある方法で収集できるホームオートメーションシステムを実装する。
                    <div className="italic font-extralight text-right m-0">[<a href="/assets/nwtn_pstr_public.pdf">Poster</a>]</div>
                    <div className="italic font-extralight text-right m-0">Node.js, IoT, ホームオートメーション</div>
                </p>
                <h3>papers</h3>
                <ol>
                    <li>
                        木下 透弥, 久松 潤之, "WebRTCを用いた低遅延ライブストリーミング方式の検討"
                        {' '}
                        電気学会研究会資料. IS / 情報システム研究会, pp. 11.-16., June 2020 [<a href="/assets/iee-wrtc-slide.pdf">slide</a>]
                    </li>
                    <li>
                        木下 透弥, 久松 潤之, "輻輳制御機能を備えた低遅延ライブストリーミングシステムの提案および評価"
                        {' '}
                        電気関係学会関西連合大会 講演論文集(G11-2), Nov 2020 [<a href="/assets/kjciee-wrtc-slide.pdf">slide</a>]
                    </li>
                </ol>
                <h3>Program/Tool/Application</h3>
                <ul>
                    <li>https://github.com/clacking/raffle - Multiplayer Realtime Unbox-like Raffle Game</li>
                    <li>https://github.com/clacking/blog2 - This website</li>
                </ul>
            </div>
        </Layout>
    );
}

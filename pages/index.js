import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import { client } from '../libs/client';

export default function Home ({ article }){
    return(
        <div>
            <Header />
            <ul>
                {article.map((article) => (
                    <li key={article.id}>
                        <Link href={`/article/${article.id}`}>
                            <a>{article.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <Footer />
        </div>
    );
}

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async() => {
    const data = await client.get({endpoint:'article'});
    return {
        props :{
            article: data.contents,
        }
    }
};
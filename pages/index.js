import Link from 'next/link';
import { client } from '../libs/client';

export default function Home ({ article }){
    return(
        <>
            <ul>
                {article.map((article) => (
                    <li key={article.id}>
                        <Link href={`/article/${article.id}`}>
                            <a>{article.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
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
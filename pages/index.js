import Link from 'next/link';
import LayoutClassName from '../styles/layout/layout.module.scss';
import Article from './components/Article';
import Tab from './components/Tab';
import { client } from '../libs/client';

export default function Home ({ article }){
    return(
        <div className={LayoutClassName['l-index']}>
            <div className={LayoutClassName['l-content']}>
                <Tab />
                <div className={LayoutClassName['l-article']}>
                <Article 
                    article={article}
                />
                </div>
            </div>
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

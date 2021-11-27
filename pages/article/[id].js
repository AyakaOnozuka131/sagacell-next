import Link from 'next/link';
import LayoutClassName from '../../styles/layout/layout.module.scss';
import ComponentClassName from '../../styles/component/component.module.scss';
import ProjectClassName from '../../styles/project/project.module.scss';
import UtilityClassName from '../../styles/utility/utility.module.scss';
import ArticleMainVisual from '../components/ArticleMainVisual';
import Breadcrumb from '../components/Breadcrumb';
import { client } from "../../libs/client";

// 関数コンポーネントのpropsを分割代入で指定
export default function articleId({ article }){
    return (
        <>
            <ArticleMainVisual 
                publishedAt={ article.publishedAt }
                title={ article.title }
                category={ article.category }
            />
            <div className={LayoutClassName['l-content']}>
                <div className={LayoutClassName['l-page']}>
                    <Breadcrumb 
                        title={ article.title }
                        category={ article.category }
                    />

                </div>
            </div>
        </>
    );
}

export const getStaticPaths = async() => {
    const data = await client.get({ endpoint: 'article' });
    const paths = data.contents.map((content)=>`/article/${content.id}`);
    return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({endpoint: 'article', contentId: id});
    return {
        props: {
            article: data,
        }
    }
}
import Link from 'next/link';
import LayoutClassName from '../../styles/layout/layout.module.scss';
import ArticleMainVisual from '../components/ArticleMainVisual';
import Breadcrumb from '../components/Breadcrumb';
import Lead from '../components/Lead';
import Example from '../components/Example';
import Flow from '../components/Flow';
import RelatedArticle from '../components/RelatedArticle';
import ShareButton from '../components/ShareButton';
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
                    <Lead 
                        title={ article.title }
                        text={ article.text }
                        showFunction={ article.showFunction }
                    />
                    <Example 
                        heading={ article.heading }
                        srcPath={ article.image.url }
                        alt={ article.image.alt }
                        width={ article.image.width }
                        height={ article.image.height }
                    />
                    <Flow 
                        component={ article.componentFlow }
                    />
                    <RelatedArticle 
                        book={ article.book }
                    />
                    <ShareButton 
                        id={ article.id }
                        title={ article.title }
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

import { client } from "../../libs/client";

export default function articleId({ article }){
    return (
        <main>
            <h1>{article.title}</h1>
            <p>{article.publishedAt}</p>
            <p>{article.category && `${article.category.name}`}</p>
            <div
                dangerouslySetInnerHTML={{
                __html: `${article.text}`,
                }}
            />
        </main>
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
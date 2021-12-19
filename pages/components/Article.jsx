import Image from 'next/image';
import Link from 'next/link';
import ComponentClassName from '../../styles/component/component.module.scss';

export default function Article ( {article} ) {
    return(
        <>
            { article.map( (item) => (
                <article className={ComponentClassName['c-article']}　key={item.id}>
                    <Link href={`/article/${item.id}`}>
                        <a className={ComponentClassName['c-article__link']}>
                        <div className={ComponentClassName['c-article__img']}>
                            <Image 
                                src={ item.image.url }
                                alt={ item.image.alt }
                                width={ item.image.width }
                                height={ item.image.height }
                            />
                        </div>
                        <div className={ComponentClassName['c-article__content']}>
                            <h2 className={ComponentClassName['c-article__title']}>
                                {item.title}
                            </h2>
                            <p className={ComponentClassName['c-article__lead']}>
                                {item.description}
                            </p>
                        </div>
                        </a>
                    </Link>
                </article>
            ))}
        </>
    );
}

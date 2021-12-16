import Link from 'next/link';
import Image from 'next/image';
import LayoutClassName from '../../styles/layout/layout.module.scss';
import ComponentClassName from '../../styles/component/component.module.scss';

export default function RelatedArticle({ book }) {
    return (
        <>
            {book.map((book) => (
                <div className={ComponentClassName['c-product']} key={book.id}>
                    <div className={LayoutClassName['l-product']}>
                        <div className={ComponentClassName['c-product__img']}>
                            <Image 
                                src={ book.image.url }
                                alt={ book.image.alt }
                                width={ book.image.width }
                                height={ book.image.height }
                            />
                        </div>
                        <div className={ComponentClassName['c-product__content']}>
                            <p className={ComponentClassName['c-product__title']}>
                                { book.title }
                            </p>
                            <div className={ComponentClassName['c-product__links']}>
                                <Link 
                                    href="[kindle]  - 探せる・見つかる・エクセル関数"
                                    as={`${book.kindle} - 探せる・見つかる・エクセル関数`}
                                    passHref 
                                >
                                    <a className={`${ComponentClassName['c-product__button']} ${ComponentClassName['c-product__button--kindle']}`}  target="_blank" rel="noopener noreferrer">
                                        Kindleで詳細を見る<span className="c-product__button__price">1,650円(税込)</span>
                                    </a>
                                </Link>
                                <Link 
                                    href="[amazon]  - 探せる・見つかる・エクセル関数"
                                    as={`${book.amazon} - 探せる・見つかる・エクセル関数`}
                                    passHref 
                                >
                                    <a className={`${ComponentClassName['c-product__button']} ${ComponentClassName['c-product__button--amazon']}`} target="_blank" rel="noopener noreferrer">
                                        Amazonで詳細を見る<span className="c-product__button__price">1,650円(税込)</span>
                                    </a>
                                </Link>
                                <Link 
                                    href="[rakuten]  - 探せる・見つかる・エクセル関数"
                                    as={`${book.rakuten} - 探せる・見つかる・エクセル関数`}
                                    passHref 
                                >
                                    <a className={`${ComponentClassName['c-product__button']} ${ComponentClassName['c-product__button--rakuten']}`}  target="_blank" rel="noopener noreferrer">
                                        楽天で詳細を見る<span className="c-product__button__price">1,650円(税込)</span>
                                    </a>
                                </Link>
                            </div>
                            <div className={ComponentClassName['c-product__point']}>
                                <span className={ComponentClassName['c-product__point__heading']}>
                                    <span className={ComponentClassName['c-product__point__heading__text']}>おすすめPOINT</span>
                                </span>
                                <p className={ComponentClassName['c-product__point__text']}>
                                    { book.point }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

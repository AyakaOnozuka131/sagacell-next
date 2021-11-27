import Link from 'next/link';
import ComponentClassName from '../../styles/component/component.module.scss';

export default function Breadcrumb(　props　) {
    // propsを分割代入
    const { title, category } = props;
    return (
        <div className={ComponentClassName['c-breadcrumb']}>
            <ul className={ComponentClassName['c-breadcrumb__list']}>
                <li className={ComponentClassName['c-breadcrumb__item']}>
                    <Link 
                        href="/" 
                        passHref 
                    >
                        <a className={ComponentClassName['breadcrumb__link']}>HOME</a>
                    </Link>
                </li>
                <li className={ComponentClassName['c-breadcrumb__item']}>
                    <Link 
                        href="/category/[category.id]" 
                        as={`/category/${category.id}`}
                        passHref 
                    >
                        <a className={ComponentClassName['breadcrumb__link']}>
                        { category && `${category.name}` }
                        </a>
                    </Link>
                </li>
                <li className={ComponentClassName['c-breadcrumb__item']}>
                    { title }
                </li>
            </ul>
        </div>
    );
}; 
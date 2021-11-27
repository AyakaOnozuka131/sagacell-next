import LayoutClassName from '../../styles/layout/layout.module.scss';
import ComponentClassName from '../../styles/component/component.module.scss';
import UtilityClassName from '../../styles/utility/utility.module.scss';

export default function articleMainVisual(　props　) {
    // propsを分割代入
    const { publishedAt, title, category } = props;
    return (
        <div className={ComponentClassName['c-page-mv']}>
            <div className={LayoutClassName['l-content']}>
                <div className={ComponentClassName['c-page-mv__content']}>
                    <p className={ComponentClassName['c-page-mv__date']}>
                        { publishedAt }
                    </p>
                    <h1 className={ComponentClassName['c-page-mv__title']}>
                        { title }
                    </h1>
                    <ul className={`${ComponentClassName['c-page-mv__list']} ${UtilityClassName['u-margin-20']}`}>
                        <li className={ComponentClassName['c-page-mv__item']}>
                            <span className={ComponentClassName['c-page-mv__tag']}>
                                { category && `${category.name}` }
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}; 
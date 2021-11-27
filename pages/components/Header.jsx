import Link from 'next/link';
import Image from 'next/image';
import LayoutClassName from '../../styles/layout/layout.module.scss';
import ComponentClassName from '../../styles/component/component.module.scss';
import UtilityClassName from '../../styles/utility/utility.module.scss';

export default function Header() {
    return (
        <>
            <div className={ComponentClassName['c-overlay']}></div>
            <header className={ComponentClassName['c-header']}>
                <div className={LayoutClassName['l-header']}>
                    <button type="button" 
                        aria-controls="global-nav" 
                        aria-expanded="false" 
                        className={`${ComponentClassName['c-ham-button']} ${ComponentClassName['c-hamburger']}`}
                    >
                        <span className={ComponentClassName['c-hamburger__line']}>
                            <span className={UtilityClassName['u-visible-hidden']}>
                                メニューを開閉する
                            </span>
                        </span>
                    </button>
                    <div className={LayoutClassName['l-header__content']}>
                    <div className={ComponentClassName['c-header-logo']}>
                        <Link 
                            href="/" 
                            passHref 
                        >
                            <a className={ComponentClassName['c-header-logo__link']}>
                                <Image 
                                    src="/images/common/logo.svg" 
                                    alt="ロゴ：match"
                                    width={180}
                                    height={19}
                                />
                            </a>
                        </Link>
                        <span className={ComponentClassName['c-header-logo__tag-line']}>探せる・見つかる・エクセル関数</span>
                    </div>
                    <nav className={ComponentClassName['c-global-nav']} id="global-nav">
                        <ul className={ComponentClassName['c-global-nav__list']}>
                            <li className={ComponentClassName['c-global-nav__item']}>
                                <Link 
                                    href="/top" 
                                    passHref
                                >
                                    <a className={ComponentClassName['c-global-nav__link']}>TOP</a>
                                </Link>
                            </li>
                            <li className={ComponentClassName['c-global-nav__item']}>
                                <Link 
                                    href="/about" 
                                    passHref 
                                >
                                    <a className={ComponentClassName['c-global-nav__link']}>このサイトについて</a>
                                </Link>
                            </li>
                            <li className={ComponentClassName['c-global-nav__item']}>
                                <Link 
                                    href="/books" 
                                    passHref 
                                >
                                    <a className={ComponentClassName['c-global-nav__link']}>おすすめ書籍</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                </div>
            </header>
        </>
    );
};
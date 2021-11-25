import Link from 'next/link';
import Image from 'next/image'
import Layout from '../../styles/layout/layout.module.scss';
import Component from '../../styles/component/component.module.scss';
import Utility from '../../styles/utility/utility.module.scss';

export default function Header() {
    return (
        <>
            <div className={Component['c-overlay']}></div>
            <header className={Component['c-header']}>
                <div className={Layout['l-header']}>
                    <button type="button" 
                        aria-controls="global-nav" 
                        aria-expanded="false" 
                        className={`${Component['c-ham-button']} ${Component['c-hamburger']}`}
                    >
                        <span className={Component['c-hamburger__line']}>
                            <span className={Utility['u-visible-hidden']}>
                                メニューを開閉する
                            </span>
                        </span>
                    </button>
                    <div className={Layout['l-header__content']}>
                    <div className={Component['c-header-logo']}>
                        <Link 
                            href="/" 
                            passHref 
                        >
                            <a className={Component['c-header-logo__link']}>
                                <Image 
                                    src="/images/common/logo.svg" 
                                    alt="ロゴ：match"
                                    width={180}
                                    height={19}
                                />
                            </a>
                        </Link>
                        <span className={Component['c-header-logo__tag-line']}>探せる・見つかる・エクセル関数</span>
                    </div>
                    <nav className={Component['c-global-nav']} id="global-nav">
                        <ul className={Component['c-global-nav__list']}>
                            <li className={Component['c-global-nav__item']}>
                                <Link 
                                    href="/top" 
                                    passHref
                                >
                                    <a className={Component['c-global-nav__link']}>TOP</a>
                                </Link>
                            </li>
                            <li className={Component['c-global-nav__item']}>
                                <Link 
                                    href="/about" 
                                    passHref 
                                >
                                    <a className={Component['c-global-nav__link']}>このサイトについて</a>
                                </Link>
                            </li>
                            <li className={Component['c-global-nav__item']}>
                                <Link 
                                    href="/books" 
                                    passHref 
                                >
                                    <a className={Component['c-global-nav__link']}>おすすめ書籍</a>
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
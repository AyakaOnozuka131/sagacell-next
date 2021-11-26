import Link from 'next/link';
import Image from 'next/image'
import ComponentClassName from '../../styles/component/component.module.scss';
import ProjectClassName from '../../styles/project/project.module.scss';

export default function Footer() {
    return (
        <footer className={ProjectClassName['p-footer']}>
            <div className={ComponentClassName['c-footer-nav']}>
                <ul className={ComponentClassName['c-footer-nav__list']}>
                    <li className={ComponentClassName['c-footer-nav__item']}>
                        <Link 
                            href="/" 
                            passHref 
                        >
                            <a className={ComponentClassName['c-footer-nav__link']}>TOP</a>
                        </Link>
                    </li>
                    <li className={ComponentClassName['c-footer-nav__item']}>
                        <Link 
                            href="/about" 
                            passHref 
                        >
                            <a className={ComponentClassName['c-footer-nav__link']}>このサイトについて</a>
                        </Link>
                    </li>
                    <li className={ComponentClassName['c-footer-nav__item']}>
                        <Link 
                            href="/books" 
                            passHref 
                        >
                            <a className={ComponentClassName['c-footer-nav__link']}>おすすめ書籍</a>
                        </Link>
                    </li>
                    <li className={ComponentClassName['c-footer-nav__item']}>
                        <Link 
                            href="/terms-and-privacy" 
                            passHref 
                        >
                            <a className={ComponentClassName['c-footer-nav__link']}>利用規約</a>
                        </Link>
                    </li>
                    <li className={ComponentClassName['c-footer-nav__item']}>
                        <a href="https://example.com/" target="_blank" rel="noopener noreferrer" className={ComponentClassName['c-footer-nav__link']}>お問い合わせ</a>
                    </li>
                </ul>
            </div>
            <div className={ProjectClassName['p-footer__logo']}>
                <div className={ProjectClassName['p-footer__logo__img']}>
                    <Image 
                        src="/images/common/logo-white.svg" 
                        alt="SAGACELL：白塗りロゴ"
                        width={174}
                        height={19}
                    />
                </div>
                <span className={ProjectClassName['p-footer__logo__catch-copy']}>探せる・見つかる・エクセル関数</span>
            </div>
            <small className={ComponentClassName['c-footer__copy']}>Copyright &copy; 2021 SAGACELL All Rights Reserved.</small>
        </footer>
    );
};
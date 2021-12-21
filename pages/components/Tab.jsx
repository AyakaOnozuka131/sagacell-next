import Link from 'next/link';
import { useRouter } from "next/router";
import ProjectClassName from '../../styles/project/project.module.scss';

export default function Tab() {
    return (
        <div className={ProjectClassName['p-tab']}>
            <ul className={ProjectClassName['p-tab__list']}>
                <li className={ProjectClassName['p-tab__item']}>
                    <Link 
                            href="/function" 
                            passHref 
                    >
                        <a className={ProjectClassName['p-tab__button']}>関数</a>
                    </Link>
                </li>
                <li className="p-tab__item" role="presentation">
                    <Link 
                        href="/graph" 
                        passHref 
                    >
                        <a className={ProjectClassName['p-tab__button']}>グラフ</a>
                    </Link>
                </li>
                <li className="p-tab__item" role="presentation">
                    <Link 
                        href="/shortcut-key" 
                        passHref 
                    >
                        <a className={ProjectClassName['p-tab__button']}>ショートカットキー</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}



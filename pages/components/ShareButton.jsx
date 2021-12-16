import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faGetPocket } from "@fortawesome/free-brands-svg-icons"; 
import ProjectClassName from '../../styles/project/project.module.scss';


export default function ShareButton(props) {
    const { id, title } = props;
    return (
        <>
            <ul className={ProjectClassName['p-share']}>
                <li className={ProjectClassName['p-share__item']}>
                    <Link 
                        href="https://twitter.com/share?url=/article/[id]&text=[title]  - 探せる・見つかる・エクセル関数" 
                        as={`https://twitter.com/share?url=/article/${id}&text=${title} - 探せる・見つかる・エクセル関数`}
                        passHref 
                    >
                        <a className={`${ProjectClassName['p-share__button']} ${ProjectClassName['p-share__button--tw']}`}  target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} size="lg"/>
                            <span className={ProjectClassName['p-share__button__text']}>ツイート</span>
                        </a>
                    </Link>
                </li>
                <li className={ProjectClassName['p-share__item']}>
                    <Link 
                        href="http://www.facebook.com/share.php?u=/article/[id] - 探せる・見つかる・エクセル関数" 
                        as={`http://www.facebook.com/share.php?u=/article/${id} - 探せる・見つかる・エクセル関数`}
                        passHref 
                    >
                        <a className={`${ProjectClassName['p-share__button']} ${ProjectClassName['p-share__button--fb']}`}  target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="lg"/>
                            <span className={ProjectClassName['p-share__button__text']}>シェア</span>
                        </a>
                    </Link>
                </li>
                <li className={ProjectClassName['p-share__item']}>
                    <Link 
                        href="http://getpocket.com/edit?url=/article/[id]&text=[title]  - 探せる・見つかる・エクセル関数" 
                        as={`http://getpocket.com/edit?url=/article/${id}&text=${title} - 探せる・見つかる・エクセル関数`}
                        passHref 
                    >
                        <a className={`${ProjectClassName['p-share__button']} ${ProjectClassName['p-share__button--pocket']}`}  target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGetPocket} size="lg"/>
                            <span className={ProjectClassName['p-share__button__text']}>Pocket</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </>
    );
}

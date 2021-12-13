import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faGetPocket } from "@fortawesome/free-brands-svg-icons"; 
import ProjectClassName from '../../styles/project/project.module.scss';


export default function ShareButton() {
    return (
        <>
            <ul className={ProjectClassName['p-share']}>
                <li className={ProjectClassName['p-share__item']}>
                    <a className={`${ProjectClassName['p-share__button']} ${ProjectClassName['p-share__button--tw']}`}>
                        <FontAwesomeIcon icon={faTwitter} size="lg"/>
                        <span className={ProjectClassName['p-share__button__text']}>ツイート</span>
                    </a>
                </li>
                <li className={ProjectClassName['p-share__item']}>
                    <a className={`${ProjectClassName['p-share__button']} ${ProjectClassName['p-share__button--fb']}`}>
                        <FontAwesomeIcon icon={faFacebook} size="lg"/>
                        <span className={ProjectClassName['p-share__button__text']}>シェア</span>
                    </a>
                </li>
                <li className={ProjectClassName['p-share__item']}>
                    <a className={`${ProjectClassName['p-share__button']} ${ProjectClassName['p-share__button--pocket']}`}>
                    <FontAwesomeIcon icon={faGetPocket} size="lg"/>
                        <span className={ProjectClassName['p-share__button__text']}>Pocket</span>
                    </a>
                </li>
            </ul>
        </>
    );
}

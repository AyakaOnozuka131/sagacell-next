import Image from 'next/image'
import ComponentClassName from '../../styles/component/component.module.scss';
import ProjectClassName from '../../styles/project/project.module.scss';
import UtilityClassName from '../../styles/utility/utility.module.scss';

export default function Lead( props ) {
    const { title, text, showFunction } = props;
    return (
        <div className={ProjectClassName['p-component']}>
            <h2 className={ComponentClassName['c-heading-primary']}>
                { title }
            </h2>
            <div className={ComponentClassName['c-text']}
                dangerouslySetInnerHTML={{
                    __html: `${text}`,
                }}
            />
            <div className={`${ComponentClassName['c-function']} ${UtilityClassName['u-margin-20']}`}>
                <pre className={ComponentClassName['c-function__text']}>
                    { showFunction }
                </pre>
                <button className={ComponentClassName['c-function__copy-button']} data-tooltip="Copy!">
                    <Image 
                        src="/images/icon/icon_copy.svg" 
                        alt="アイコン：コピー"
                        width={21}
                        height={25}
                    />
                </button>
            </div>
        </div>
    );
}
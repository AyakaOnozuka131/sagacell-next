import Image from 'next/image';
import ComponentClassName from '../../styles/component/component.module.scss';
import ProjectClassName from '../../styles/project/project.module.scss';

export default function Example( props ) {
    const { heading, srcPath, alt, width, height } = props;
    return (
        <div className={ProjectClassName['p-component']}>
            <h3 className={ComponentClassName['c-heading-secondary']}>{ heading }</h3>
            <div className={ComponentClassName['c-img']}>
                <Image 
                    src={ srcPath }
                    alt={ alt }
                    width={ width }
                    height={ height }
                />
            </div>
        </div>
    );
}

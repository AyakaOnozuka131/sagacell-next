import Image from 'next/image';
import ComponentClassName from '../../styles/component/component.module.scss';
import ProjectClassName from '../../styles/project/project.module.scss';

export default function FlowItem( props ) {
    const { image, heading, text, list } = props;
    return (
        <div className={ProjectClassName['p-flow']}>
            <div className={ProjectClassName['p-flow__img']}>
                <Image 
                    src={ isPropsVal(image.url) }
                    alt={ isPropsVal(image.alt) }
                    width={ isPropsVal(image.width) }
                    height={ isPropsVal(image.height) }
                />
            </div>
            <div className={ProjectClassName['p-flow__content']}>
                <h3 className={ProjectClassName['p-flow__heading']}>
                    <span className={ProjectClassName['p-flow__heading__marker']}>
                        { isPropsVal(heading) }
                    </span>
                </h3>
                <div className={ComponentClassName['c-text']}
                    dangerouslySetInnerHTML={ getRichText(text) }
                />
                { list ? (
                <div className={ProjectClassName['p-flow__point']}>
                    <span className={ProjectClassName['p-flow__point__heading']}>
                        <span className={ProjectClassName['p-flow__point__heading__text']}>POINT</span>
                    </span>
                    <div 
                        dangerouslySetInnerHTML={ getRichText(list) }
                    />
                </div>
                ) : null }  
            </div>
        </div>
    );
}

const isPropsVal = ( val ) => {
    return ( val ) ? val : null;
};

const getRichText = ( html ) => {
    return ( html ) ? { __html: `${html}` } : null;
};

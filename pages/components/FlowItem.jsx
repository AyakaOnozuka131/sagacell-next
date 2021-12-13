import Image from 'next/image';

export default function FlowItem( props ) {
    const { image, heading, text, list } = props;
    return (
        <div>
            <Image 
                src={ isPropsVal(image.url) }
                alt={ isPropsVal(image.alt) }
                width={ isPropsVal(image.width) }
                height={ isPropsVal(image.height) }
            />
            { isPropsVal(heading) }
            <div 
                dangerouslySetInnerHTML={ getRichText(text) }
            />
            <div 
                dangerouslySetInnerHTML={ getRichText(list) }
            />
        </div>
    );
}

const isPropsVal = ( val ) => {
    return ( val ) ? val : null;
};

const getRichText = ( html ) => {
    return ( html ) ? { __html: `${html}` } : null;
};

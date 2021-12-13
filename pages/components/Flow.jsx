import Image from 'next/image';
import ComponentClassName from '../../styles/component/component.module.scss';
import ProjectClassName from '../../styles/project/project.module.scss';
import FlowItem from '../components/FlowItem';

export default function Flow( {component} ) {
    return (
        <div>
            { component.map( (item, index) => 
                item.fieldId === 'flow' ? (
                    <FlowItem 
                        key={index} 
                        image={item.image}
                        heading={item.heading}
                        text={item.text}
                        list={item.list}
                    />
                ) : null
            )}  
        </div>
    );
}


import ProjectClassName from '../../styles/project/project.module.scss';
import FlowItem from '../components/FlowItem';

export default function Flow( {component} ) {
    return (
        <div className={ProjectClassName['p-component']}>
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

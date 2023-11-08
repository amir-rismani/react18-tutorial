import './AccordionItem.css'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
const AccordionItem = ({ item, expandedItem, setExpandedItem }) => {
    return (
        <div className={`accordion-item ${expandedItem === item.id ? 'accordion-item--expanded' : ''}`} key={item.id}>
            <div className='accordion-item__header' onClick={() => setExpandedItem(() => item.id)}>
                <h3>{item.title}</h3>
                <ChevronDownIcon className='chevron' />
            </div>
            <div className="accordion-item__content"><p>{item.description}</p></div>
        </div>
    );
}

export default AccordionItem;
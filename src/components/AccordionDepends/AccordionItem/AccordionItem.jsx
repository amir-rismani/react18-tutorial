import './AccordionItem.css'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
const AccordionItem = ({ id, title, expandedItem, setExpandedItem, children }) => {
    return (
        <div className={`accordion-item ${expandedItem === id ? 'accordion-item--expanded' : ''}`} key={id}>
            <div className='accordion-item__header' onClick={() => setExpandedItem(() => expandedItem === id ? null : id)}>
                <h3>{title}</h3>
                <ChevronDownIcon className='chevron' />
            </div>
            <div className="accordion-item__content"><p>{children}</p></div>
        </div>
    );
}

export default AccordionItem;
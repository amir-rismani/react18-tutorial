import './AccordionItem.css'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useState } from "react";
const AccordionItem = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <div className={`accordion-item ${isExpanded ? 'accordion-item--expanded' : ''}`} key={item.id}>
            <div className='accordion-item__header' onClick={() => setIsExpanded((is) => !is)}>
                <h3>{item.title}</h3>
                {/* inline style */}
                {/* <ChevronDownIcon
                    style={{
                        width: '1.2rem',
                        transition: 'all 0.3s ease-in-out',
                        rotate: isExpanded ? '180deg' : '0deg'
                    }}
                /> */}
                <ChevronDownIcon className='chevron' />
            </div>
            <div className="accordion-item__content"><p>{item.description}</p></div>
            {/* conditional rendering */}
            {/* {isExpanded && <div className="accordion-item__content"><p>{item.description}</p></div>} */}
        </div>
    );
}

export default AccordionItem;
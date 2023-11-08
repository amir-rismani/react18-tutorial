import { useState } from 'react'
import AccordionItem from './AccordionItem/AccordionItem';

import './AccordionDepends.css'
const accordion = [
    { id: 1, title: 'Accordion title 1', description: 'Accordion description 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.' },
    { id: 2, title: 'Accordion title 2', description: 'Accordion description 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.' },
    { id: 3, title: 'Accordion title 3', description: 'Accordion description 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.' },
    { id: 4, title: 'Accordion title 4', description: 'Accordion description 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.', },
];
const AccordionDepends = () => {
    const [expandedItem, setExpandedItem] = useState(0)

    return (
        <div className='accordion'>
            {
                accordion.map(item => <AccordionItem item={item} key={item.id} expandedItem={expandedItem} setExpandedItem={setExpandedItem} />)
            }
        </div >
    );
}

export default AccordionDepends;
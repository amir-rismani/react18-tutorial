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
    const [expandedItem, setExpandedItem] = useState(null)

    return (
        <div className='accordion'>
            {
                accordion.map(item => <AccordionItem id={item.id} title={item.title} key={item.id} expandedItem={expandedItem} setExpandedItem={setExpandedItem} >{item.description}</AccordionItem>)
            }

            <AccordionItem id={5} title="Accordion title #5" key={5} expandedItem={expandedItem} setExpandedItem={setExpandedItem} >
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi perferendis reprehenderit rem voluptas possimus asperiores omnis, cum eius, voluptatum explicabo, molestiae repellendus quasi repudiandae temporibus iusto. Sit natus facilis sint!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, suscipit:</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam architecto dolores doloribus ullam, fugiat fuga!</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatem repellat laudantium eligendi reiciendis consequatur molestias, facilis laboriosam aliquid deleniti quisquam ea? Dolor, facilis eaque.</li>
                </ul>
            </AccordionItem>
        </div >
    );
}

export default AccordionDepends;
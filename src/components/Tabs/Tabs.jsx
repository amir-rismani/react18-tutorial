import './Tabs.css'
import { useState } from "react";

const tabsData = [
    { id: 1, title: "Tab Item 1", content: "Tab Item Content 1" },
    { id: 2, title: "Tab Item 2", content: "Tab Item Content 2" },
    { id: 3, title: "Tab Item 3", content: "Tab Item Content 3" },
];

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(2)
    return (
        <div className="tabs">
            <div className="tabs__header">
                {
                    tabsData.map(tabData => <div key={tabData.id} className={activeTab === tabData.id ? 'tab active' : 'tab'} onClick={() => setActiveTab(tabData.id)}>{tabData.title}</div>)
                }
            </div>
            <div className="tabs__content">
                {tabsData[activeTab - 1].content}
            </div>
        </div>
    );
}

export default Tabs;
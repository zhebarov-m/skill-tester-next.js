'use client'
import styles from './Sidebar.module.scss'
import {useState} from "react";

interface SidebarListType {
    "Frontend Developer": string[],
    "Backend Developer": string[]
}

type tListItems = [string, string[]]

const sidebarListTree: SidebarListType = {
    "Frontend Developer": [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React'
    ],
    "Backend Developer": [
        'dwd',
        'dwdwd',
        'dwdwdwd'
    ]
}


const Sidebar = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [toggleState, setToggleState] = useState(1)
    console.log(toggleState)

    const toggleTab = (indexActive: number) => {
        setToggleState(indexActive)
    }

    const handleToogleSidebar = () => {
        setCollapsed(prevState => !prevState)
    }

    function getItemsSidebar(listItems: tListItems[]) {
        return listItems.map((item, index) => (
            <div key={index} className={styles.listTree}>
                <h1 onClick={() => toggleTab(index + 1)}
                    className={toggleState === (index + 1) ? `${styles.listTitle} ${styles.activeList}` : styles.listTitle}>{item[0]}</h1>
                <ul className={toggleState === (index + 1) ? `${styles.list} ${styles.activeListContent}` : styles.list}>
                    {item[1].map((value: string, i: number) => <li key={i}>{value}</li>)}
                </ul>
            </div>
        ))
    }


    return (
        <div
            onMouseOver={handleToogleSidebar}
            onMouseOut={handleToogleSidebar}
            className={`
                ${styles.sidebar}
                ${collapsed ? styles.collapsed : ''}
            `}>
            <h1>Skill Tester</h1>
            {getItemsSidebar(Object.entries(sidebarListTree))}
        </div>
    );
};

export default Sidebar;

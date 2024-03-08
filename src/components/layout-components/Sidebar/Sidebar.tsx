'use client'
import styles from './Sidebar.module.scss'
import {useState} from "react";
import navigationConfig from "@/configs/NavigationConfig";
import SideNavContent from "@/components/layout-components/MenuContent/MenuContent";

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


    const handleToogleSidebar = () => {
        setCollapsed(prevState => !prevState)
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
            <SideNavContent />
        </div>
    );
};

export default Sidebar;

import styles from './Sidebar.module.scss'
import {FC} from "react";

interface SidebarListType {
    frontendElementTree: string[],
    backendElementTree: string[]
}


const sidebarListTree: SidebarListType = {
    frontendElementTree: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React'
    ],
    backendElementTree: [
        'dwd',
        'dwdwd',
        'dwdwdwd'
    ]
}

interface SidebarProps {
    collapsed: boolean
}

const Sidebar: FC<SidebarProps> = (props) => {
    const {collapsed} = props

    function getTitlesSidebar(listItems: string[]) {
        return listItems.map(item => (
            <div>
                <h1>{item[0]}</h1>
                <ul>
                    {/*{item[1].map((value: string, i: number) => <li key={i}>{value}</li>)}*/}
                </ul>
            </div>
        ))
    }

    function getListElementSidebar(listItems: string[]) {
        return listItems.map(item => <li>{item}</li>)
    }

    return (
        <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
            <div>
                {/*{getTitlesSidebar(Object.entries(sidebarListTree))}*/}
            </div>
        </div>
    );
};

export default Sidebar;

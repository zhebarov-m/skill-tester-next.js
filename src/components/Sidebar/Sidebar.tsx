import styles from './Sidebar.module.scss'
import {FC} from "react";

interface SidebarProps {
    collapsed: boolean
}

const Sidebar:FC<SidebarProps> = (props) => {
    const {collapsed} = props

    return (
        <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
            wdwddw
        </div>
    );
};

export default Sidebar;

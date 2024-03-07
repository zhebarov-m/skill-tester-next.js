'use client';
import styles from './page.module.css'
import Sidebar from "@/components/Sidebar/Sidebar";
import {useState} from "react";

export default function Home() {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const handleToogleSidebar = () => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div className={styles.homePage}>
            <button onClick={handleToogleSidebar}>OPEN</button>
            <Sidebar collapsed={collapsed}/>
        </div>
    )
}

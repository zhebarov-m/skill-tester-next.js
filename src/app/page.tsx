import styles from './page.module.css'
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {


    return (
        <div className={styles.homePage}>
            <div className={styles.homePageContainer}>
                <div className={styles.sidebarCont}>
                    <Sidebar />
                </div>
                <button >OPEN</button>
            </div>
        </div>
    )
}

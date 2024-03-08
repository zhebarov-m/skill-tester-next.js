import navigationConfig from "@/configs/NavigationConfig";
import Link from "next/link";

const SideNavContent = () => {

    return (
        <>
            {navigationConfig.map((menu) =>
                menu.submenu.length > 0 ? (
                    <div key={menu.key}>
                        <h1>{menu.title}</h1>
                        <ul>
                            {menu.submenu?.map((subMenuFirst) =>
                                <li key={subMenuFirst.key}>
                                    <Link href={subMenuFirst.path}>
                                        {subMenuFirst.title}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                ) : null
            )}
        </>
    )
}

export default SideNavContent

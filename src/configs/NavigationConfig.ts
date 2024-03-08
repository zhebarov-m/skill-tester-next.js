import {HiMiniComputerDesktop} from "react-icons/hi2";
import {AiTwotoneHtml5} from "react-icons/ai";
import {IoLogoCss3} from "react-icons/io5";
import {
    BiLogoTypescript,
    BiLogoJavascript,
    BiLogoReact
} from "react-icons/bi";

import {APP_PREFIX_PATH} from "@/configs/AppConfig";

const frontendNavTree = [{
    key: 'frontend',
    path: `${APP_PREFIX_PATH}/frontend`,
    title: 'sidenav.frontend',
    icon: HiMiniComputerDesktop,
    breadcrumb: false,
    submenu: [
        {
            key: 'frontend-html',
            path: `${APP_PREFIX_PATH}/frontend/html`,
            title: 'sidenav.frontend.html',
            icon: AiTwotoneHtml5,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'frontend-css',
            path: `${APP_PREFIX_PATH}/frontend/css`,
            title: 'sidenav.frontend.css',
            icon: IoLogoCss3,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'frontend-javascript',
            path: `${APP_PREFIX_PATH}/frontend/javascript`,
            title: 'sidenav.frontend.javascript',
            icon: BiLogoJavascript,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'frontend-typescript',
            path: `${APP_PREFIX_PATH}/frontend/typescript`,
            title: 'sidenav.frontend.typescript',
            icon: BiLogoTypescript,
            breadcrumb: false,
            submenu: []
        },
        {
            key: 'frontend-react',
            path: `${APP_PREFIX_PATH}/frontend/react`,
            title: 'sidenav.frontend.react',
            icon: BiLogoReact,
            breadcrumb: false,
            submenu: []
        },
    ]
}]

const navigationConfig = [
    ...frontendNavTree,
]

export default navigationConfig

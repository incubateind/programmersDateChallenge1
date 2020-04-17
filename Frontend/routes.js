
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout

import UserMap from "./src/components/Dashboard/map";
// core components/views for RTL layout


const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        rtlName: "لوحة القيادة",
        icon: Dashboard,
        component: UserMap,
        layout: "/admin"
    },
    {
        path: "/user",
        name: "User Profile",
        rtlName: "ملف تعريفي للمستخدم",
        icon: Person,
        component: UserMap,
        layout: "/admin"
    },
    {
        path: "/table",
        name: "Table List",
        rtlName: "قائمة الجدول",
        icon: "content_paste",
        component: UserMap ,
        layout: "/admin"
    },
    {
        path: "/typography",
        name: "Typography",
        rtlName: "طباعة",
        icon: LibraryBooks,
        component: UserMap,
        layout: "/admin"
    },
    {
        path: "/icons",
        name: "Icons",
        rtlName: "الرموز",
        icon: BubbleChart,
        component: UserMap,
        layout: "/admin"
    },
    {
        path: "/maps",
        name: "Maps",
        rtlName: "خرائط",
        icon: LocationOn,
        component: UserMap,
        layout: "/admin"
    },
    {
        path: "/notifications",
        name: "Notifications",
        rtlName: "إخطارات",
        icon: Notifications,
        component: UserMap,
        layout: "/admin"
    },
    {
        path: "/rtl-page",
        name: "RTL Support",
        rtlName: "پشتیبانی از راست به چپ",
        icon: Language,
        component: UserMap,
        layout: "/rtl"
    },
    
];

export default dashboardRoutes;

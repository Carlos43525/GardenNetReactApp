import Dashboard from "pages/Overview/Dashboard";
import Main from "pages/Main";

import {
    HomeIcon,
    StatsIcon,
    CreditIcon,
    PersonIcon,
    DocumentIcon,
    RocketIcon,
    SupportIcon,
  } from "components/Icons/Icons";

const routes = [
    {
        path: "/dashboard", 
        name: "Dashboard", 
        icon: <HomeIcon color="inherit" />,
        component: Dashboard,
    }, 
    {
      path: "/main", 
      name: "Main", 
      icon: <HomeIcon color="inherit" />,
      component: Main,
  }
]

  export default routes;

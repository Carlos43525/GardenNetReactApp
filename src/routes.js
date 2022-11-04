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
    name: "OVERVIEW",
    category: "overview",
    state: "pageCollapse",
    views: [
      {
        path: "/dashboard",
        name: "Dashboard",
        icon: <HomeIcon color="inherit" />,
        component: Dashboard,
      },
    ]
  }, 
  {
    name: "MONITOR",
    category: "monitor",
    state: "pageCollapse",
    views: [
      {
          path: "/houseplants", 
          name: "House Plants", 
          icon: <HomeIcon color="inherit" />,
          component: Dashboard,
      }, 
      {
        path: "", 
        name: "Garden Plants", 
        icon: <HomeIcon color="gray" />,
        component: Main, 
     }
  ]
  },
  {
    name: "MANAGE",
    category: "manage",
    state: "pageCollapse",
    views: [
      {
        path: "",
        name: "Plants",
        icon: <HomeIcon color="gray" />,
        component: Dashboard,
      },
      {
        path: "",
        name: "Devices",
        icon: <HomeIcon color="gray" />,
        component: Main,
      }
    ]
  }
]

export default routes;

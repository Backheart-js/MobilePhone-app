import AdminAdd from "~/admin/AdminAdd"
import AdminHome from "~/admin/AdminHome"
import AdminLayout from "~/admin/layout/AdminLayout"
import routerConfig from "~/config/Router"
import MainLayout from '~/layout/MainLayout/MainLayout'
import Cart from '~/pages/Cart'
import Category from '~/pages/Category'
import Detail from '~/pages/Detail'
import Events from '~/pages/Events'
import Home from '~/pages/Home'
import SearchResult from '~/pages/SearchResult'

export const publicRouter = [
    {path: routerConfig.home, component:Home, layout: MainLayout},
    {path: routerConfig.category, component:Category, layout: MainLayout},
    {path: routerConfig.detail, component:Detail, layout: MainLayout},
    {path: routerConfig.events, component:Events, layout: MainLayout},
    {path: routerConfig.cart, component:Cart, layout: MainLayout},
    {path: routerConfig.search, component:SearchResult, layout: MainLayout},
    {path: routerConfig.admin, component:AdminHome, layout: AdminLayout},
    {path: routerConfig.adminAdd, component:AdminAdd, layout: AdminLayout},
]

export const privateRoutes = [
    
]


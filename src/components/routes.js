import Backet from "../pages/Backet";
import Main from "../pages/Main"
import Adminn from "../pages/Adminn";
import Product from "../pages/Product";
import Auth from "../pages/Auth";
import Catalog from "../pages/Catalog";
import Logout from "../pages/Logout";
import Register from "../pages/Register";
import Registration from "../pages/Registration";
import Reset from "../pages/Reset";
import ResetPassword from "./ResetPassword";
import Like from "../pages/Like";
import AdminRedact from"../pages/AdminRedact"
import MainPage from "../pages/MainPage";

export const authRoutes = [
    {
        path:"/basket",
        Component:Backet,
    },
    {
        path:"/admin",
        Component:Adminn
    },
    {
        path:"/admin/edit",
        Component:AdminRedact
    }
]
export const publicRoutes = [
    {
        path:"/main",
        Component:MainPage
    },
    {
        path:"/product",
        Component:Product
    },
    {
        path: "/login",
        Component:Auth
    },
    {
        path: "/catalog",
        Component:Catalog
    },
    {
      path:"/logout",
      Component:Logout
    },
    {
        path:"/register",
        Component:Register
    },
    {
        path:"/registration",
        Component:Registration
    },
    {
        path:"/reset",
        Component:Reset
    },
    {
        path:"/resetpassword",
        Component:ResetPassword
    },
    {
        path:"/favourites",
        Component:Like
    },
    {
        path:"/baskeet",
        Component:Backet
    }
]
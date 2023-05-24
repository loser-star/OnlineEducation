// // 导入路由组件
// import Home from '../view/Home/Home'
// import About from '../view/About/About'
// // 导入路由管理工具
// // import {RouteConfig} from 'react-router-config'
 
// // const routes:RouteConfig = [
//   const routes = [
//   {
//     path:'/',
//     exact:true,
//     component:Home
//   },
//   {
//     path:'/about',
//     exact:true,
//     component:About
//   },
// ]
 
// export default routes;

import React from 'react'
import { Navigate } from "react-router-dom"

const Home = React.lazy(()=> import("../view/Home/Home"))
const About = React.lazy(()=> import("@/view/About/About"))
const routes = [
  {
    path:'/',
    element: <Navigate to='/home' />  // 路由重定向
  },
  {
    path:"/home",
    element:<Home></Home>
  },
  {
    path:"/about",
    element:<About></About>
  }
]
export default routes
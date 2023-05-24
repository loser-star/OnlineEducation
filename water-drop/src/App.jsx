import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "./store/modules/home";
// 引入routes组件
import routes from "./router";
// 引入包管理工具
// import { renderRoutes, RouteConfig } from "react-router-config";
import {useRoutes} from 'react-router-dom'
function App() {
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highscireInfo: state.home.highscireInfo,
      discountInfo: state.home.discountInfo,
      hotrecommendInfo: state.home.hotrecommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  return <div className="App">hello world
    {/* {renderRoutes(routes as RouteConfig[])} */}
    {/* {renderRoutes(routes)} */}
    {useRoutes(routes)}
    </div>;
}

export default App;

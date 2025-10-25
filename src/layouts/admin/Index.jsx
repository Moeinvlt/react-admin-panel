import React, { useContext, useEffect, useState } from "react";
import Navbar from "./navbar/index";
import SideBar from "./sidebar/Index";
import AdminContextContainer, {
  AdminContext,
} from "../../context/adminLayoutContext.jsx";
import Dashboard from "../../pages/dashboard/Dashboard";
import Category from "../../pages/category/Category";
import Content from "../../pages/Content";
import axios from "axios";
import { Navigate } from "react-router";
import { useIsLogin } from "../../hooks/AuthHook";

const Index = () => {
  const [loading, isLogin] = useIsLogin()

  return (
    <AdminContextContainer>
      {
        loading ? (
          <h1 className="text-center">کمی صبر کنید...</h1>
        ) : isLogin ? (
          <div>

          <Content />
  
          <Navbar />
  
          <SideBar />
  
        </div>
        ) : (
          <Navigate to={'/auth/login'} />
        )
      }
    </AdminContextContainer>
  );
};

export default Index;

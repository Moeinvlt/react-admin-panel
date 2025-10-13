import React, { useContext } from "react";
import Navbar from "./navbar/index";
import SideBar from "./sidebar/Index";
import AdminContextContainer, {
  AdminContext,
} from "../../context/adminLayoutContext.jsx";
import Dashboard from "../../pages/dashboard/Dashboard";
import Category from "../../pages/category/Category";
import Content from "../../pages/Content";

const Index = () => {

  return (
    <AdminContextContainer>
      <div>

        <Content />

        <Navbar />

        <SideBar />

      </div>
    </AdminContextContainer>
  );
};

export default Index;

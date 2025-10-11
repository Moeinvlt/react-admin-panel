import React, { useContext, useEffect } from "react";
import Navbar from "./navbar/index";
import SideBar from "./sidebar/Index";
import AdminContextContainer, {
  AdminContext,
} from "../../context/adminLayoutContext.jsx";

const Index = () => {
  const { showSidebar } = useContext(AdminContext);

  return (
    <AdminContextContainer>
      <div>
        <Navbar />

        <SideBar />

        <section
          className={`bg-light py-2 px-3 ${
            showSidebar ? "with_sidebar" : null
          }`}
          id="content_section"
        ></section>
      </div>
    </AdminContextContainer>
  );
};

export default Index;

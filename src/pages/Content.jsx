import { useContext } from "react";
import Category from "./category/Category";
import Dashboard from "./dashboard/Dashboard";
import { AdminContext } from "../context/adminLayoutContext";
import Product from "./product/Product";

const Content = () => {
  const { showSidebar } = useContext(AdminContext);

  return (
    <section
      className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}
      id="content_section"
    >
      {/* <Dashboard /> */}

      <Category />

      {/* <Product /> */}
    </section>
  );
};

export default Content;

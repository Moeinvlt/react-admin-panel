import { useContext } from "react";
import Category from "./category/Category";
import Dashboard from "./dashboard/Dashboard";
import { AdminContext } from "../context/adminLayoutContext";
import Product from "./product/Product";
import { Route, Routes } from "react-router";

const Content = () => {
  const { showSidebar } = useContext(AdminContext);

  return (
    <section
      className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}
      id="content_section"
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/products" element={<Product />} />

        <Route path="*" element={<Dashboard />} />
      </Routes>
    </section>
  );
};

export default Content;

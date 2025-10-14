import { useContext } from "react";
import { AdminContext } from "../../../context/adminLayoutContext.jsx";
import Avatar from "./Avatar.jsx";
import SideBarGroupTitle from "./SideBarGroupTitle.jsx";
import SideBarItem from "./SideBarItem.jsx";

const Index = () => {
  const { showSidebar } = useContext(AdminContext);

  return (
    <section id="sidebar_section">
      <div
        className={`mini_sidebar collapsedd bg-dark h-100 ${
          showSidebar ? "expanded" : null
        }`}
      >
        <div className="p-0 m-0">
          {/* *Avatar image* */}
          <Avatar
            name="معین ورزل دوست"
            imagePath="src/assets/images/avatar/user1.jpg"
          />
          <SideBarItem targetPath="/" icon="fas fa-tachometer-alt" title="داشبورد" />
          {/* <!-- =================================== --> */}
          <SideBarGroupTitle title="فروشگاه" />

          <SideBarItem targetPath="/categories" icon="fas fa-stream" title="مدیریت گروه محصول" />

          <SideBarItem targetPath="/products" icon="fas fa-cube" title="مدیریت محصول" />

          <SideBarItem targetPath="/test" icon="fas fa-copyright" title="مدیریت برند ها" />

          <SideBarItem targetPath="/test" icon="fab fa-pagelines" title="مدیریت گارانتی ها" />

          <SideBarItem targetPath="/test" icon="fas fa-palette" title="مدیریت رنگ ها" />

          <SideBarItem targetPath="/test" icon="fas fa-percentage" title="مدیریت تخفیف ها" />
          {/* <!-- =================================== --> */}
          <SideBarGroupTitle title="سفارشات و سبد" />

          <SideBarItem targetPath="/test" icon="fas fa-shopping-basket" title="مدیریت سبد ها" />

          <SideBarItem targetPath="/test" icon="fas fa-luggage-cart" title="مدیریت سفارشات" />

          <SideBarItem targetPath="/test" icon="fas fa-truck-loading" title="مدیریت نحوه ارسال" />
          {/* <!-- =================================== --> */}
          <SideBarGroupTitle title="کاربران و همکاران" />

          <SideBarItem targetPath="/test" icon="fas fa-users" title="مشاهده کاربران" />

          <SideBarItem targetPath="/test" icon="fas fa-user-tag" title="نقش ها" />

          <SideBarItem targetPath="/test" icon="fas fa-shield-alt" title="مجوز ها" />
          {/* <!-- =================================== --> */}
          <SideBarGroupTitle title="ارتباطات" />

          <SideBarItem targetPath="/test" icon="fas fa-question-circle" title="سوال ها" />

          <SideBarItem targetPath="/test" icon="fas fa-comment" title="نظرات" />
          {/* <li className="py-2 btn-group dropstart pe-4">
                    <i className="ms-3 icon fas fa-check text-light"></i>
                    <span className="hiddenable" data-bs-toggle="dropdown" aria-expanded="false">داشبورد</span>
                    
                    <ul className="dropdown-menu px-2 sidebar_submenu_list">
                      <li className="d-none">اول</li>
                      <li>اول</li>
                      <li>دوم</li>
                      <li>سوم</li>
                    </ul>
                </li> */}
        </div>
      </div>
    </section>
  );
};

export default Index;

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
          <SideBarItem icon="fas fa-tachometer-alt" title="داشبورد" />
          {/* <!-- =================================== --> */}
          <SideBarGroupTitle title="فروشگاه" />

          <SideBarItem icon="fas fa-stream" title="مدیریت گروه محصول" />

          <SideBarItem icon="fas fa-cube" title="مدیریت محصول" />

          <SideBarItem icon="fas fa-copyright" title="مدیریت برند ها" />

          <SideBarItem icon="fab fa-pagelines" title="مدیریت گارانتی ها" />

          <SideBarItem icon="fas fa-palette" title="مدیریت رنگ ها" />

          <SideBarItem icon="fas fa-percentage" title="مدیریت تخفیف ها" />
          {/* <!-- =================================== --> */}
          <SideBarGroupTitle title="سفارشات و سبد" />

          <SideBarItem icon="fas fa-shopping-basket" title="مدیریت سبد ها" />

          <SideBarItem icon="fas fa-luggage-cart" title="مدیریت سفارشات" />

          <SideBarItem icon="fas fa-truck-loading" title="مدیریت نحوه ارسال" />
          {/* <!-- =================================== --> */}
          <SideBarGroupTitle title="کاربران و همکاران" />

          <SideBarItem icon="fas fa-users" title="مشاهده کاربران" />

          <SideBarItem icon="fas fa-user-tag" title="نقش ها" />

          <SideBarItem icon="fas fa-shield-alt" title="مجوز ها" />
          {/* <!-- =================================== --> */}
          <SideBarGroupTitle title="ارتباطات" />

          <SideBarItem icon="fas fa-question-circle" title="سوال ها" />

          <SideBarItem icon="fas fa-comment" title="نظرات" />
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

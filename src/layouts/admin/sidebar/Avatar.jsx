const Avatar = ({name, imagePath}) => {
  return (
    <div className="pt-1 pb-2 d-flex flex-column avatar_li mb-2 position-relative sidebarItems">
      <span className="avatar_box">
        <img
          className="w-100 h-100 rounded-circle"
          src={imagePath}
          alt="User Avata"
        />
      </span>
      <div className="sidebar_avatar_name text-center hiddenable">
        {name}
      </div>
    </div>
  );
};

export default Avatar;

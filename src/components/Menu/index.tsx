import ProfileIcon from "../Icons/ProfileIcon";
import MenuIcon from "../Icons/MenuIcon";

import "./style.scss";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-item">
        <ProfileIcon  />
        <p className="menu-item-text">Тренировки</p>
      </div>
      <div className="menu-item">
        <MenuIcon />
        <p className="menu-item-text">Еще</p>
      </div>
    </div>
  );
};

export default Menu;

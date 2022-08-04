import "react-pro-sidebar/dist/css/styles.css";
import { ProSidebar, Menu, MenuItem, SubMenu, image } from "react-pro-sidebar";
import { GiBattleAxe, GiTechnoHeart } from "react-icons/gi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [Projects, setProjects] = useState([]);

  // useEffect(() => {
  //   axios.get("/api/projects").then((response) => {
  //     setProjects(response.data);
  //   });
  // });

  function renderMenuItems() {
    Projects.map((Project) => {
      return (
        <MenuItem>
          ${Project.name}
          <Link to="${Project.name}" />
        </MenuItem>
      );
    });
  }

  return (
    <aside className="h-full">
      <ProSidebar collapsed="true">
        <Menu iconShape="square">
          <MenuItem icon={GiBattleAxe}>Dashboard</MenuItem>
          <SubMenu title="Projects" icon={GiTechnoHeart}>
            {/* {renderMenuItems} */}
          </SubMenu>
        </Menu>
        <image>
          
        </image>
      </ProSidebar>
    </aside>
  );
};

export default Sidebar;

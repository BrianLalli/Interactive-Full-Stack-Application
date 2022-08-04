import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Sidebar = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    //****** remove http://localhost:5000 BEFORE PRODUCTION *******
    axios.get("http://localhost:5000/api/projects").then((response) => {
      setProjects(response.data);
      console.info(response.data);
    });
  }, []);

  function renderMenuItems(projects) {
    return <MenuItem key={projects._id}>{projects.name}</MenuItem>;
  }

  return (
    <aside className="ae-side h-full">
      <ProSidebar collapsed="">
        <Menu iconShape="square">
          <MenuItem>Dashboard</MenuItem>
          <SubMenu title="Projects">
            {projects.map((projects) => {
              return renderMenuItems(projects);
            })}
          </SubMenu>
        </Menu>
      </ProSidebar>
    </aside>
  );
};

export default Sidebar;

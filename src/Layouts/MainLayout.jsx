import { Link, Outlet } from "react-router-dom";
import { PiShareNetworkLight } from "react-icons/pi";
import { IoIosGitNetwork } from "react-icons/io";
import { FaConnectdevelop } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";
import { HiMenuAlt1 } from "react-icons/hi";



const MainLayout = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-4">
            <Outlet />
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn m-3 drawer-button lg:hidden"
          >
            <HiMenuAlt1 />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <Link to={'/'} className="text-2xl  text-center p-3">DNS Manager</Link>
            <li>
              <Link to={'/'}><PiShareNetworkLight className="text-xl"/> Domains</Link>
            </li>
            <li>
              <Link to={'/records'}><IoIosGitNetwork className="text-xl"/> DNS Records</Link>
            </li>
            <li>
              <Link to={'/'}><FaConnectdevelop className="text-xl"/> DNS Management</Link>
            </li>
            <li>
              <Link to={'/analytics'}><IoAnalyticsOutline className="text-xl"/>Analytics</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

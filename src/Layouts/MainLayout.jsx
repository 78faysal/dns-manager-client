import { Link, Outlet } from "react-router-dom";
import { PiShareNetworkLight } from "react-icons/pi";
import { IoIosGitNetwork } from "react-icons/io";
import { FaConnectdevelop } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";
import { HiMenuAlt1 } from "react-icons/hi";
import useAuth from "../Hooks/useAuth";
import { LuLogOut } from "react-icons/lu";

const MainLayout = () => {
  const { logOut } = useAuth();
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-base-100 p-4">
          <label
            htmlFor="my-drawer-2"
            className="btn m-3 drawer-button lg:hidden"
          >
            <HiMenuAlt1 />
          </label>
          {/* Page content here */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 h-full bg-base-300 text-base-content">
            {/* Sidebar content here */}

            <Link to={"/"} className="text-2xl text-center p-3">
              DNS Manager
            </Link>
            <div className="flex flex-col justify-around">
              <div>
                <li>
                  <Link to={"/"}>
                    <IoAnalyticsOutline className="text-xl" />
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link to={"/domains"}>
                    <PiShareNetworkLight className="text-xl" /> Domains
                  </Link>
                </li>
                <li>
                  <Link to={"/records"}>
                    <IoIosGitNetwork className="text-xl" /> DNS Records
                  </Link>
                </li>
                <li>
                  <Link to={"/manageDns"}>
                    <FaConnectdevelop className="text-xl" /> Records Management
                  </Link>
                </li>
              </div>
              <div className="divider my-2"></div>
              <div>
                <li>
                  <p onClick={() => logOut()}>
                    <LuLogOut className="text-xl" /> Log Out
                  </p>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

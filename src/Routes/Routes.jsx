import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Analytics from "../Pages/Analytics/Analytics";
import DnsRecords from "../Pages/DnsRecors/DnsRecords";
import Domains from "../Pages/Domains/Domains";
import ManageDNS from "../Pages/ManageDNS/ManageDNS";
import AddRecord from "../Pages/ManageDNS/AddRecord";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Analytics />
        },
        {
            path: '/records',
            element: <DnsRecords />
        },
        {
            path: '/domains',
            element: <Domains />
        },
        {
          path: '/manageDns',
          element: <ManageDNS />
        },
        {
          path: '/manageDns/addRecord',
          element: <AddRecord />
        }
    ]
  },
]);

export default Routes;

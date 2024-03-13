import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Analytics from "../Pages/Analytics/Analytics";
import DnsRecords from "../Pages/DnsRecors/DnsRecords";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: '/analytics',
            element: <Analytics />
        },
        {
            path: '/records',
            element: <DnsRecords />
        }
    ]
  },
]);

export default Routes;

import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
//
// Pages

import Login from "./pages/Login";
import NotFound from "./pages/Page404";
import Register from "./pages/Register";

// Import green folder components
import Blockchains from "./pages/blockchains";
import EthereumComponent from "./pages/blockchains/chains";
import Overview from "./pages/overview";
import VirtualAccounts from "./pages/virtual_accounts";
import Usage from "./pages/usage";
import Notifications from "./pages/notifications/index";
import ContactSupport from "./pages/contact_support";
import Documentations from "./pages/documentations";
import Pricing from "./pages/upgradeplans";
import ErrorLogs from "./pages/error_logs";
import Subscriptions from "./pages/notifications/subscriptions";

// Profile
import MyPlan from "./pages/profile/my_plan";
import Account from "./pages/profile/account";

export default function Router() {
    return useRoutes([
        {
            path: "/dashboard",
            element: <DashboardLayout />,
            children: [
                { path: "blockchains", element: <Blockchains /> },
                { path: "ethereum", element: <EthereumComponent /> },
                { path: "overview", element: <Overview /> },
                { path: "virtual_accounts", element: <VirtualAccounts /> },
                { path: "usage", element: <Usage /> },
                {
                    path: "notifications",
                    children: [
                        { index: true, element: <Notifications /> },
                        { path: "subscriptions", element: <Subscriptions /> },
                    ],
                },
                { path: "contact_support", element: <ContactSupport /> },
                { path: "documentations", element: <Documentations /> },
                { path: "upgradeplans", element: <Pricing /> },
                { path: "error_logs", element: <ErrorLogs /> },
                { path: "my_plan", element: <MyPlan /> },
                { path: "account", element: <Account /> },
            ],
        },
        {
            path: "/",
            element: <LogoOnlyLayout />,
            children: [
                { path: "/", element: <Navigate to="/dashboard/overview" /> },
                { path: "login", element: <Login /> },
                { path: "register", element: <Register /> },
                { path: "404", element: <NotFound /> },
                { path: "*", element: <Navigate to="/404" /> },
            ],
        },
        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}

import { TbMessage2Bolt } from "react-icons/tb";
import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdDashboardCustomize } from "react-icons/md"
import { FaUsers } from "react-icons/fa";
import { SiGithubactions } from "react-icons/si";
import { TbTransactionDollar } from "react-icons/tb";
export const DashboardLinks = [
  {
    name: "Our clients",
    path: "/dashboard/clients",
    icon: <FaUsers />,
  },
  {
    name: "Activities",
    path: "/dashboard/activities",
    icon: <SiGithubactions />,
  },
  {
    name: "Transactions",
    path: "/dashboard/transactions",
    icon: <TbTransactionDollar />,
  },
  {
    name: "Messages",
    path: "/dashboard/messages",
    icon: <TbMessage2Bolt />,
  },
];
export const adminHomeMenu = {
  name: "Dashboard",
  path: "/dashboard",
  icon: <MdDashboardCustomize />,
};
export const profileAndSupportLinks = [
  {
    name: "Profile",
    path: "/dashboard/profile",
    icon: <CgProfile />,
  },
  {
    name: "Subscribers",
    path: "/dashboard/subscribers",
    icon: <MdSubscriptions />,
  },
];

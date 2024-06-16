"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { SidebarMenu, sideBarMenus } from "./Sidebar";

interface SidebarElementsProps {
  className?: string;
  DashboardLinks: SidebarMenu[];
  SidebarFooterMenu: SidebarMenu[];
  HomeMenu: SidebarMenu;
  onclick?: () => void;
}

const SidebarElements = ({
  className,
  onclick,
  DashboardLinks,
  SidebarFooterMenu,
  HomeMenu,
}: SidebarElementsProps) => {
  const currentPath = usePathname();
  console.log(currentPath);
  return (
    <div className={`${className} w-full p-4`}>
      <div>
        <LogoSidebar />
        <SidebarMenuLink
          path={HomeMenu.path}
          name={HomeMenu.name}
          icon={HomeMenu.icon}
          onclick={onclick}
          className={classNames(
            "flex gap-3 p-3 items-center mt-4",
            currentPath === HomeMenu.path
              ? "bg-emerald-700 text-white rounded-lg"
              : ""
          )}
        />
      </div>
      <div className="flex flex-col gap-2 justify-center border-y mt-10 py-4">
        {DashboardLinks.map((link: SidebarMenu, index: number) => (
          <SidebarMenuLink
            key={index}
            path={link.path}
            name={link.name}
            icon={link.icon}
            onclick={onclick}
            className={classNames(
              "flex gap-3 p-3 items-center",
              currentPath === link.path
                ? "bg-emerald-700 text-white rounded-lg"
                : ""
            )}
          />
        ))}
      </div>
      <div className="flex flex-col gap-3 justify-center mt-14">
        {SidebarFooterMenu.map((link, index) => (
          <Link href={link.path} key={index} onClick={onclick}>
            <div
              className={classNames(
                "flex gap-2 p-3 items-center text-sm text-gray-500",
                currentPath == link.path
                  ? "bg-emerald-700 text-white rounded-lg"
                  : ""
              )}
            >
              <span className="text-xl">{link.icon}</span>
              <p>{link.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarElements;

const SidebarMenuLink = ({
  path,
  name,
  icon,
  onclick,
  className,
}: any) => {
  return (
    <Link href={path} onClick={onclick}>
      <div
        className={`${className} flex gap-3 p-3 items-center text-sm text-gray-500`}
      >
        <span className="text-xl">{icon}</span>
        <p>{name}</p>
      </div>
    </Link>
  );
};

const LogoSidebar = () => {
  return (
    <div className="flex items-center">
      <Link href="/" className="flex gap-1 items-center">
        <Image
          src={"/images/logooo.png"}
          className="h-14"
          alt="bt Logo"
          width={60}
          height={50}
        />
        <span className="text-xl font-bold text-emerald-700">BT Limited</span>
      </Link>
    </div>
  );
};

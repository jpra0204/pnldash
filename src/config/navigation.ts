import {
  Cog6ToothIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export type NavItem = {
  label: string;
  href: string;
  Icon: typeof HomeIcon;
};

export const adminNavItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", Icon: HomeIcon },
  { label: "Users", href: "/users", Icon: UserGroupIcon },
  { label: "Settings", href: "/settings", Icon: Cog6ToothIcon },
];

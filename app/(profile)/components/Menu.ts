interface MenuItem {
  title: string;
  link: string;
  icon: string;
}

export const menu: MenuItem[] = [
  {
    title: "Profile",
    link: "/",
    icon: "fa-circle-info",
  },
  {
    title: "Skills",
    link: "/skills",
    icon: "fa-terminal",
  },
];

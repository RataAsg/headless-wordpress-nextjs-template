export const MENU_LOCATIONS = {
  MAIN: "rt_blank_main_menu",
  FOOTER: "rt_blank_footer_menu",
}

export interface MenuItem {
  id: string;
  label: string;
  url: string;
  path: string;
  parentId: string | null;
}

export interface NavItem extends MenuItem {
  children?: NavItem[];
}

export interface Menu {
  id: string;
  name: string;
  menuItems: {
    nodes: MenuItem[];
  };
}

export interface MenuResponse {
  menu: Menu | null;
}
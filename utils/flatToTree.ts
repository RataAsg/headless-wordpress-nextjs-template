import { MenuItem, NavItem } from "@/lib/types/menu";

export function flatToTree(items: MenuItem[]): NavItem[] {
    const root: NavItem[] = [];
    const map: { [key: string]: NavItem } = {};

    items.forEach((item) => {
        map[item.id] = { ...item, children: [] };
    });

    items.forEach((item) => {
        if (item.parentId && map[item.parentId]) {
            map[item.parentId].children?.push(map[item.id]);
        } else {
            root.push(map[item.id]);
        }
    });

    return root;
}

// src/components/layout/MainMenu.tsx
import Link from "next/link";
import { getMenuByLocation } from "@/services/menu";
import { flatToTree } from "@/utils/flatToTree";

interface MainMenuProps {
    // Use a location enum value like MENU_LOCATIONS.MAIN
    location: string;
    className?: string;
};

export async function MainMenu({ location, className }: MainMenuProps) {
    const flatMenuItems = await getMenuByLocation(location);
    const navItems = flatToTree(flatMenuItems);

    return (
        <nav className={["hidden md:block", className].filter(Boolean).join(" ")}>
            <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                    <li key={item.id} className="group relative">
                        <Link
                            href={item.path || item.url || "/"}
                            className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                        >
                            {item.label}
                        </Link>

                        {item.children &&
                            item.children.length > 0 &&
                            (
                                <ul className="invisible absolute -right-2 mt-2 w-48 origin-top-right rounded-md bg-white p-2 opacity-0 shadow-lg ring-1 ring-black/5 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                                    {item.children.map((child) => (
                                        <li key={child.id}>
                                            <Link
                                                href={child.path || child.url || "/"}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                {child.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

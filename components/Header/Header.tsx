import Link from "next/link";
import { MainMenu } from "../Menu/MainMenu";
import { MENU_LOCATIONS } from "@/lib/types/menu";
import { getHeaderCta } from "@/services/cta";

export async function Header() {
    const cta = await getHeaderCta();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo Section */}
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-xl font-bold text-blue-600">
                        Logo
                    </Link>
                </div>

                {/* Main Menu Navigation */}
                <MainMenu location={MENU_LOCATIONS.MAIN} />

                {/* Action Button (Optional) */}
                <div className="flex items-center gap-4">
                    {cta ? (
                        <Link
                            href={cta.uri}
                            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                        >
                            {cta.title}
                        </Link>
                    ) : null}
                </div>
            </div>
        </header>
    );
}

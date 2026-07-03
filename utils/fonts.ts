import { isThemeColor, themeColor } from "@/theme";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type ThemeColor = keyof typeof themeColor;

export function getHeadingTag(level?: number): `h${HeadingLevel}` {
    const levels: Record<number, `h${HeadingLevel}`> = {
        1: "h1",
        2: "h2",
        3: "h3",
        4: "h4",
        5: "h5",
        6: "h6"
    };
    return levels[level || 2] || "h2";
}

// Map WordPress text alignment to Tailwind classes
export function getTextAlign(textAlign?: string): string {
    const textAlignMap: Record<string, string> = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
    };
    return textAlign ? textAlignMap[textAlign] || "" : "";
}

// Size classes by level
export function getHeadingSize(level?: number): string {
    const sizeMap: Record<number, string> = {
        1: "text-5xl font-extrabold leading-tight",
        2: "text-4xl font-extrabold leading-tight",
        3: "text-3xl font-bold leading-snug",
        4: "text-2xl font-bold",
        5: "text-xl font-bold",
        6: "text-lg font-bold uppercase tracking-wide",
    };
    return sizeMap[level || 2] || sizeMap[2];
}

export function getColor(textColor?: string): string | undefined {
    if (!textColor) return undefined;

    return isThemeColor(textColor) ? themeColor[textColor] : textColor;
}

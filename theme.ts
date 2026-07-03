export const themeColor = {
    "rt-body": "#fffcf9",
    "rt-paper": "#fffdf9",
    "rt-cream": "#f8f3ea",
    "rt-cream-2": "#f0e7db",
    "rt-ink": "#2d252b",
    "rt-ink-soft": "#6a5f66",
    "rt-ink-mute": "#998f95",
    "rt-pink": "#e77ea5",
    "rt-pink-soft": "#efb9cd",
    "rt-blush": "#f6dde7",
    "rt-line": "#ddd3d8",
    "rt-line-soft": "#eee7ea",
} as const;

export function isThemeColor(value: string): value is keyof typeof themeColor {
    return value in themeColor;
}

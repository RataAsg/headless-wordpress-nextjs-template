export const designTokens = {
    colors: {
        background: "#ffffff",
        foreground: "#171717",

        rtBody: "#fffcf9",
        rtPaper: "#fffdf9",
        rtCream: "#f8f3ea",
        rtCream2: "#f0e7db",

        rtInk: "#2d252b",
        rtInkSoft: "#6a5f66",
        rtInkMute: "#998f95",

        rtPink: "#e77ea5",
        rtPinkDeep: "#e77ea5",
        rtPinkSoft: "#efb9cd",
        rtBlush: "#f6dde7",

        rtLine: "#ddd3d8",
        rtLineSoft: "#eee7ea",
    },

    fonts: {
        sans: `"Hanken Grotesk", system-ui, -apple-system, sans-serif`,
    },

    spacing: {
        rtPad: "clamp(18px, 4.5vw, 80px)",
        section: "clamp(48px, 8vw, 120px)",
        contentSize: "960px",
        wideSize: "1560px",
    },

    typography: {
        base: "1rem",
        small: "0.875rem",
        medium: "1rem",
        large: "1.5rem",
        xLarge: "clamp(2rem, 4vw, 3rem)",
        h1: "clamp(2.5rem, 6vw, 4.5rem)",
        h2: "clamp(2rem, 4vw, 3rem)",
        h3: "1.75rem",
        lineHeight: {
            normal: "1.6",
            tight: "1.15",
            heading: "1.05",
        },
    },

    radius: {
        pill: "999px",
    },
} as const;

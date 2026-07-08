export function normalizeUrl(url: string) {
    const wpUrl = process.env.NEXT_PUBLIC_WP_URL;

    if (!wpUrl) return url;
    if (!url.startsWith(wpUrl)) return url;

    return url.replace(wpUrl, "");
}
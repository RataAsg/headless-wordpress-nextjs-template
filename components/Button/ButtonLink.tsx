import Link from "next/link";
import { normalizeUrl } from "@/utils/normalizeUrls";

interface ButtonLinkProps {
    destination: string,
    label: string
}

export function ButtonLink({ destination, label }: ButtonLinkProps) {
    const url = normalizeUrl(destination);

    return (
        <Link
            href={url}
            className="btn btn-primary"
        >
            {label}
        </Link>
    )
}
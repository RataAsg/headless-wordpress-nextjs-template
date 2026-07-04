import Link from "next/link";

interface ButtonLinkProps {
    destination: string,
    label: string
}

export function ButtonLink({ destination, label }: ButtonLinkProps) {
    return (
        <Link
            href={destination}
            className="btn btn-primary"
        >
            {label}
        </Link>
    )
}
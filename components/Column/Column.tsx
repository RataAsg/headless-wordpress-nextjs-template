import { ReactNode } from "react";

interface ColumnProps {
    children: ReactNode,
    width: string
}

export function Column({ children, width }: ColumnProps) {
    const widthStyle = width
        ? { flexBasis: width, flexGrow: 1 }
        : { flexGrow: 1, flexBasis: 0 };

    return (
        <div className="grow px-2 py-5"
            style={widthStyle}>
            {children}
        </div>
    )
}
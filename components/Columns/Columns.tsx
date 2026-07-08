import { ReactNode } from "react"

interface ColumnsProps {
    isStackedOnMobile?: boolean,
    children: ReactNode
}

export function Columns({ isStackedOnMobile = true, children }: ColumnsProps) {
    return (
        <div className="my-10 w-full">
            <div
                className={`
          max-w-5xl mx-auto flex gap-4
          ${isStackedOnMobile ? "flex-col md:flex-row" : "flex-row"}
        `}
            >
                {children}
            </div>
        </div>
    )
}
import { getTextAlign } from "@/utils/fonts";
import { ButtonLink } from "../Button";

type TextAlign = "left" | "center" | "right";
interface CallToActionProps {
    align?: TextAlign,
    label: string,
    destination: string,
}

export function CallToAction({ align = "right", label, destination }: CallToActionProps) {
    const alignClass = getTextAlign(align);

    return (
        <div className={alignClass}>
            <ButtonLink destination={destination}
                label={label} />
        </div>
    )
}
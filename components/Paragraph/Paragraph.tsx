import { absoluteToRelativeUrls } from "@/utils/absoluteToRelativeUrls";
import { getColor, getTextAlign } from "@/utils/fonts";

type ParagraphProps = {
    content?: string;
    textAlign?: string;
    textColor?: string;
}

export function Paragraph({ content = "", textAlign, textColor }: ParagraphProps) {
    const alignClass = getTextAlign(textAlign);
    const color = getColor(textColor);

    return <p
        className={alignClass}
        style={color ? { color } : undefined}
        dangerouslySetInnerHTML={{ __html: absoluteToRelativeUrls(content) }}
    />
}
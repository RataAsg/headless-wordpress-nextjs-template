import React from "react";
import { getHeadingTag, getTextAlign, getHeadingSize, getColor } from "@/utils/fonts";

type HeadingProps = {
    content?: string;
    level?: number;
    textAlign?: string;
    textColor?: string;
}

export function Heading({ content = "", level, textAlign, textColor }: HeadingProps) {
    const tag = getHeadingTag(level);
    const alignClass = getTextAlign(textAlign);
    const sizeClass = getHeadingSize(level);
    const color = getColor(textColor);

    return React.createElement(tag, {
        className: `${sizeClass} ${alignClass} my-4`,
        style: { color: color },
        dangerouslySetInnerHTML: { __html: content }
    });
};

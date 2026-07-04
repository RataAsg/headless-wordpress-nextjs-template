export type BlockAttributePrimitive = string | number | boolean | null | undefined;

export type BlockAttributeValue =
    | BlockAttributePrimitive
    | BlockAttributeObject
    | BlockAttributeValue[];

export interface BlockAttributeObject {
    [key: string]: BlockAttributeValue;
}

export interface BlockColorStyle {
    text?: string;
    background?: string;
    [key: string]: BlockAttributeValue;
}

export interface BlockElementStyle {
    color?: BlockColorStyle;
    [key: string]: BlockAttributeValue;
}

export interface BlockStyle {
    [key: string]: BlockAttributeValue;
    color?: BlockColorStyle;
    elements?: {
        [key: string]: BlockElementStyle;
    };
}

export interface BlockAttributes {
    content?: string;
    level?: number;
    textAlign?: string;
    textColor?: string;
    style?: BlockStyle;
    [key: string]: BlockAttributeValue;
}

export interface Block {
    id?: string;
    name: string;
    attributes?: BlockAttributes;
    innerBlocks?: Block[];
}

export function cleanAndTransformBlocks(
    blocksJSON: Block[] | undefined,
    parentId = "block"
): Block[] {
    const blocks = blocksJSON ?? [];

    return blocks.map((block, index) => {
        const id = `${parentId}-${index}`;

        return {
            ...block,
            id,
            innerBlocks: cleanAndTransformBlocks(block.innerBlocks, id),
        };
    });
}

export type BlockAttributePrimitive = string | number | boolean | null | undefined;

export type BlockAttributeObject = {
    [key: string]: BlockAttributeValue;
};

export type BlockAttributeValue =
    | BlockAttributePrimitive
    | BlockAttributeObject
    | BlockAttributeValue[];

export type BlockStyle = {
    [key: string]: BlockAttributeValue;
    color?: {
        text?: string;
        background?: string;
        [key: string]: BlockAttributeValue;
    };
    elements?: {
        [key: string]: {
            color?: {
                text?: string;
                background?: string;
                [key: string]: BlockAttributeValue;
            };
            [key: string]: BlockAttributeValue;
        };
    };
};

export type BlockAttributes = {
    content?: string;
    level?: number;
    textAlign?: string;
    textColor?: string;
    style?: BlockStyle;
    [key: string]: BlockAttributeValue;
};

export type Block = {
    id?: string;
    name: string;
    attributes?: BlockAttributes;
    innerBlocks?: Block[];
};

export function cleanAndTransformBlocks(
    blocksJSON: Block[] | undefined,
    parentId = "block",
): Block[] {
    const blocks = JSON.parse(JSON.stringify(blocksJSON ?? [])) as Block[];

    return blocks.map((block, index) => {
        const id = `${parentId}-${index}`;

        return {
            ...block,
            id,
            innerBlocks: cleanAndTransformBlocks(block.innerBlocks, id),
        };
    });
};

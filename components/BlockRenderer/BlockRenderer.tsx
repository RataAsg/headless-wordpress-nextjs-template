import { Block } from "@/utils/cleanAndTransformBlocks";
import { Heading } from "@/components/Heading/Heading";
import { Cover } from "@/components/Cover/Cover";
import { Paragraph } from "../Paragraph/Paragraph";

interface BlockRendererProps {
    blocks: Block[];
};

export function BlockRenderer({ blocks }: BlockRendererProps) {
    return (
        <>
            {blocks.map((block) => {
                const key = block.id;

                switch (block.name) {
                    case "core/heading": {
                        return (
                            <Heading
                                key={key}
                                content={block.attributes?.content}
                                level={block.attributes?.level}
                                textAlign={block.attributes?.textAlign as string}
                                textColor={block.attributes?.textColor as string}
                            />
                        );
                    }

                    case "core/paragraph": {
                        return (
                            <Paragraph
                                key={key}
                                content={block.attributes?.content}
                                textAlign={block.attributes?.textAlign as string}
                                textColor={block.attributes?.textColor ||
                                    block.attributes?.style?.color?.text as string}
                            />
                        );
                    }

                    case "core/cover": {
                        return (
                            <Cover
                                key={key}
                                url={block.attributes?.url as string}
                                dimRatio={block.attributes?.dimRatio as number}
                                customOverlayColor={block.attributes?.customOverlayColor as string}
                                innerBlocks={block.innerBlocks}
                            />
                        );
                    }

                    default: {
                        console.warn("Unknown block:", block.name);
                        return null;
                    }
                }
            })}
        </>
    );
};

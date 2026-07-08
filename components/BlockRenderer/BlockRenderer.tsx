import { Block } from "@/utils/cleanAndTransformBlocks";
import { Heading } from "@/components/Heading/Heading";
import { Cover } from "@/components/Cover/Cover";
import { Paragraph } from "../Paragraph/Paragraph";
import { CallToAction } from "../CallToAction/CallToAction";
import { CtaBlockData } from "@/lib/types/acf";
import { getBlockData } from "@/utils/getBlockData";
import { Columns } from "../Columns";
import { Column } from "../Column";
import Image from "next/image";

interface BlockRendererProps {
    blocks: Block[];
};

export function BlockRenderer({ blocks }: BlockRendererProps) {
    const firstImageIndex = blocks.findIndex((b) => b.name === "core/image");

    return (
        <>
            {blocks.map((block, index) => {
                const key = block.id;

                switch (block.name) {
                    case "acf/cta-button": {
                        const data = getBlockData<CtaBlockData>(block.attributes?.data);

                        const align = data?.cta_align ?? "right";
                        const label = data?.cta_label ?? "";
                        const destination = data?.cta_destination?.url ?? "/";

                        if (!label) return null;

                        return (
                            <CallToAction
                                key={key}
                                align={align}
                                label={label}
                                destination={destination}
                            />
                        );
                    }

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

                    case "core/columns": {
                        return (
                            <Columns
                                key={key}
                                isStackedOnMobile={block.attributes?.isStackedOnMobile as boolean}>
                                <BlockRenderer blocks={block.innerBlocks || []} />
                            </Columns>
                        )
                    }

                    case "core/column": {
                        return (
                            <Column
                                key={key}
                                width={block.attributes?.width as string}>
                                <BlockRenderer blocks={block.innerBlocks || []} />
                            </Column>
                        )
                    }

                    case "core/block":
                    case "core/group": {
                        return (
                            <div key={key}>
                                <BlockRenderer blocks={block.innerBlocks || []} />
                            </div>
                        );
                    }

                    case "core/image": {
                        const isPriority = index === firstImageIndex;

                        return (
                            <Image
                                key={key}
                                src={block.attributes?.url as string}
                                width={block.attributes?.width as number}
                                height={block.attributes?.height as number}
                                alt={(block.attributes?.alt as string) || ""}
                                priority={isPriority}
                            />
                        )
                    }

                    default: {
                        console.warn("Unknown block:", block);
                        return null;
                    }
                }
            })}
        </>
    );
};

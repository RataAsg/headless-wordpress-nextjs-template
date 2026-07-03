import Image from "next/image";
import { BlockRenderer } from "@/components/BlockRenderer/BlockRenderer";
import { Block } from "@/utils/cleanAndTransformBlocks";

interface CoverProps {
    url?: string;
    dimRatio?: number;
    customOverlayColor?: string;
    innerBlocks?: Block[];
}

export function Cover({
    url,
    dimRatio = 50,
    customOverlayColor = "#000000",
    innerBlocks,
}: CoverProps) {
    return (
        <div className="relative flex h-screen min-h-100 items-center justify-center bg-slate-800 text-white">

            {url && (
                <Image
                    src={url}
                    alt="Cover"
                    fill
                    className="object-cover object-center mix-blend-soft-light"
                    priority
                />
            )}

            <div
                className="absolute inset-0 opacity-50"
                style={{
                    backgroundColor: customOverlayColor,
                    opacity: (dimRatio ?? 50) / 100,
                }}
            />

            <div className="relative z-10 w-full max-w-5xl px-4">
                {innerBlocks && <BlockRenderer blocks={innerBlocks} />}
            </div>
        </div>
    );
};

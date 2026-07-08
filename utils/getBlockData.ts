import { BlockAttributeValue } from "@/utils/cleanAndTransformBlocks";

export function getBlockData<T>(value: BlockAttributeValue | undefined): T | undefined {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
        return undefined;
    }

    return value as T;
}
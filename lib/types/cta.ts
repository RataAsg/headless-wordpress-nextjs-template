export type HeaderCtaLink = {
    __typename?: "Page";
    id: string;
    uri: string;
} | null;

export interface HeaderCta {
    title: string;
    uri: string;
}

export interface HeaderSettings {
    headerCallToActionButtonTitle?: string | null;
    headerCallToActionUrl?: HeaderCtaLink;
}

export interface AcfOptionsHeader {
    HeaderSettings?: HeaderSettings | null;
}

export interface HeaderCtaQueryResponse {
    acfOptionsHeader?: AcfOptionsHeader | null;
}

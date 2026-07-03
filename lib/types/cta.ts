export type HeaderCtaLink =
    | { __typename?: "Page"; id: string; uri: string }
    | null;

export type HeaderCta = {
    title: string;
    uri: string;
};

export type HeaderCtaQueryResponse = {
    acfOptionsHeader?: {
        HeaderSettings?: {
            headerCallToActionButtonTitle?: string | null;
            headerCallToActionUrl?: HeaderCtaLink;
        } | null;
    } | null;
};

import client from "@/lib/apollo-client";
import { HeaderCta, HeaderCtaQueryResponse } from "@/lib/types/cta";
import { absoluteToRelativeUrls } from "@/utils/absoluteToRelativeUrls";
import { gql } from "@apollo/client";

const CALL_TO_ACTION_QUERY = gql`
  query CallToAction {
    acfOptionsHeader {
      HeaderSettings {
        headerCallToActionButtonTitle
        headerCallToActionUrl {
          ... on Page {
            id
            uri
          }
        }
      }
    }
  }
`;

// Fetch header CTA from WordPress via WPGraphQL
export async function getHeaderCta(): Promise<HeaderCta | null> {
  try {
    const response = await client.query({
      query: CALL_TO_ACTION_QUERY,
    });

    const data = response.data as HeaderCtaQueryResponse;

    const settings = data?.acfOptionsHeader?.HeaderSettings;

    const title = settings?.headerCallToActionButtonTitle?.trim() || "";
    const rawUri = settings?.headerCallToActionUrl?.uri || "";
    const uri = absoluteToRelativeUrls(rawUri)

    if (!title || !uri) return null;

    return { title, uri };
  } catch (error) {
    console.error("getHeaderCta error:", error);
    return null;
  }
}

import client from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import { Block, cleanAndTransformBlocks } from "@/utils/cleanAndTransformBlocks";

// Interfaces for GraphQL Responses
interface PageNode {
    __typename: "Page";
    id: string;
    title: string;
    uri: string;
    blocks: Block[];
}

interface GetPageByUriResponse {
    nodeByUri: PageNode | null;
}

// Query definition
const GET_PAGE_BY_URI = gql`
  query GetPageByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      __typename
      ... on Page {
        id
        title
        uri
        blocks
      }
    }
  }
`;

// Helper to format URI from slug array
export function getUriFromSlug(slug?: string[]): string {
    return slug?.length ? `/${slug.join("/")}/` : "/";
}

// Function to fetch and clean data
export async function getPageStaticProps(slug?: string[]) {
    const uri = getUriFromSlug(slug);

    try {
        const response = await client.query({
            query: GET_PAGE_BY_URI,
            variables: { uri },
            fetchPolicy: "no-cache",
        });

        const data = response.data as GetPageByUriResponse;
        const page = data.nodeByUri;

        if (!page) {
            return null;
        }

        const blocks = cleanAndTransformBlocks(page.blocks);

        return {
            page: {
                id: page.id,
                title: page.title,
                uri: page.uri,
            },
            blocks,
        };
    } catch (error) {
        console.error("Error in getPageStaticProps:", error);
        return null;
    }
}

import { gql } from "@apollo/client";
import client from "@/lib/apollo-client";
import { BlockRenderer } from "@/components/BlockRenderer";
import { Block, cleanAndTransformBlocks } from "@/utils/cleanAndTransformBlocks";

type PageProps = {
    params: Promise<{
        slug?: string[];
    }>;
};

type AllPagesQueryResponse = {
    pages: {
        nodes: {
            uri: string;
        }[];
    };
};

type GetPageByUriResponse = {
    nodeByUri:
    | {
        __typename: "Page";
        id: string;
        title: string;
        uri: string;
        blocks: Block[];
    }
    | null;
};

export default async function Page(props: PageProps) {
    const params = await props.params;

    const uri = params.slug?.length
        ? `/${params.slug.join("/")}/`
        : "/";

    const response = await client.query({
        query: gql`
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
    `,
        variables: {
            uri,
        },
        fetchPolicy: "no-cache",
    });

    const data = response.data as GetPageByUriResponse;
    const page = data.nodeByUri;

    // If no page is found
    if (!page) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-xl font-semibold">
                    صفحه مورد نظر یافت نشد.
                </p>
            </div>
        );
    }

    const blocks = cleanAndTransformBlocks(page.blocks);

    return <div>
        <BlockRenderer blocks={blocks} />
    </div>;
}

export async function generateStaticParams() {
    const response = await client.query({
        query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
      }
    `,
        fetchPolicy: "no-cache",
    });

    const data = response.data as AllPagesQueryResponse;

    return data.pages.nodes.map((page) => ({
        slug: page.uri.replace(/^\/|\/$/g, "").split("/").filter(Boolean),
    }));
}

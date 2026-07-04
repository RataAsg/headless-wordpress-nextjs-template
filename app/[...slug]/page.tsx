import { gql } from "@apollo/client";
import client from "@/lib/apollo-client";
import { BlockRenderer } from "@/components/BlockRenderer";
import { getPageStaticProps } from "@/utils/getPageStaticProps";

interface PageProps {
    params: Promise<{
        slug?: string[];
    }>;
};

interface AllPagesQueryResponse {
    pages: {
        nodes: {
            uri: string;
        }[];
    };
};

export default async function Page(props: PageProps) {
    const params = await props.params;

    const page = await getPageStaticProps(params.slug);

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

    return <div>
        <BlockRenderer blocks={page.blocks} />
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

import client from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import { BlockRenderer } from "@/components/BlockRenderer";
import { Block, cleanAndTransformBlocks } from "@/utils/cleanAndTransformBlocks";

// Precise definition of types
type PageData = {
  nodeByUri: {
    id: string;
    blocks: Block[];
  } | null;
};

export default async function HomePage() {
  const response = await client.query({
    query: gql`
      query GetPageContent {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks
          }
        }
      }
    `,
  });

  const data = response.data as PageData;
  const page = data.nodeByUri;

  // If no page is found
  if (!page) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold">
          صفحه مورد نظر در وردپرس یافت نشد.
        </p>
      </div>
    );
  }

  const blocks = cleanAndTransformBlocks(page.blocks);

  return (
    <div>
      <BlockRenderer blocks={blocks} />
    </div>
  );
}

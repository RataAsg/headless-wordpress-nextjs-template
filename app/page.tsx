import { BlockRenderer } from "@/components/BlockRenderer";
import { getPageStaticProps } from "@/utils/getPageStaticProps";

export default async function HomePage() {
  const page = await getPageStaticProps();

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

  return (
    <div>
      <BlockRenderer blocks={page.blocks} />
    </div>
  );
}

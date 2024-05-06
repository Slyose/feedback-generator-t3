import Head from "next/head";
import { useRouter } from "next/router";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <Head>
        <title>{category}</title>
        <meta name="description" content={`View the sprints in ${category}`} />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
          <h1 className="text-4xl font-bold">{category}</h1>
      </main>
    </>
  );
}

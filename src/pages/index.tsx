import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const sprintCategories = api.sprintCategory.get.useQuery();

  return (
    <>
      <Head>
        <title>Feedback Generator</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Feedback Generator{" "}
            <span className="text-3xl italic text-[hsl(280,100%,70%)] text-opacity-80">
              T3
            </span>
          </h1>
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Sprint Categories</h2>
            {sprintCategories.data?.map((category) => {
              return (
                <Link
                  href={`/categories/${category.categoryName}`}
                  className="rounded-xl bg-white/10 p-6 hover:bg-white/20"
                >
                  <h3 className="text-2xl font-bold text-white">
                    {category.categoryName} →
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

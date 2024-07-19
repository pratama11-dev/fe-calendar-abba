import Head from "next/head";

function HeadPage({ title, css }: { title: string; css?: string }) {
  return (
    <Head>
      <title>{`${title} | ${process.env.NEXT_PUBLIC_APPNAME ?? "APP"}`}</title>
      <link rel="stylesheet" type="text/css" href={`/css/${css}`} />
    </Head>
  );
}

export default HeadPage;

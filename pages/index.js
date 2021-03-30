import Head from "next/head";

import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio Rater</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dashboard></Dashboard>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dev Community 👩‍💻👨‍💻</title>
        <meta
          name="description"
          content="Software developer community for sharing knowledge"
        />
        {/* <Link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <h1>Index page</h1>

      <Link
        href={{
          pathname: "/[username]",
          query: { username: "shahan" },
        }}
      >
        <a>shahan</a>
      </Link>
    </div>
  );
}
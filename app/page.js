import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/weather">Weather</Link>
          </li>
          <li>
            <Link href="/activity">Activity</Link>
          </li>
        </ul>

        {/* <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          // className={styles.vercelLogo}
          width={100}
          height={24}
          priority
        /> */}
      </div>
    </main>
  );
}

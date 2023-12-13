import Link from "next/link";

export default function Header() {
  return (
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
    </div>
  );
}

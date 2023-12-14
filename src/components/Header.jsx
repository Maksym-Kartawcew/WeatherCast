import Link from "next/link";
import { NavigationBox } from "./Components.styled";

export default function Header() {
  return (
    <NavigationBox>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/weather">Weather</Link>
      </li>
      <li>
        <Link href="/activity">Activity</Link>
      </li>
    </NavigationBox>
  );
}

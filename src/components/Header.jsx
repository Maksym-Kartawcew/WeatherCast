"use client";
import Link from "next/link";
import { NavigationBox, NavigationLink } from "./Components.styled";
import { links } from "@/config/links";
import { usePathname } from "next/navigation";

export default function Header() {
  const currentPath = usePathname();
  const isActive = (pathname) => currentPath === pathname;

  return (
    <NavigationBox>
      {Object.values(links).map((el) => (
        <NavigationLink key={el.href} $isActive={isActive(el.href)}>
          <Link href={el.href}>{el.name}</Link>
        </NavigationLink>
      ))}
    </NavigationBox>
  );
}

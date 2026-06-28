"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    name: "Donation Requests",
    href: "/donation-requests",
  },
];

export default function NavLinks({ mobile = false }) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={clsx(
            "font-medium transition hover:text-[#C62828]",
            pathname === link.href
              ? "text-[#C62828]"
              : "text-gray-700",
            mobile && "py-2"
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
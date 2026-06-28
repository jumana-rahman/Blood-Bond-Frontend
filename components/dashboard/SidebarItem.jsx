"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarItem({
  href,
  icon: Icon,
  label,
}) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all
      ${
        isActive
          ? "bg-blue-600 text-white"
          : "hover:bg-gray-100 dark:hover:bg-gray-800"
      }`}
    >
      <Icon size={20} />

      <span>{label}</span>
    </Link>
  );
}
"use client";

import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";

export default function MobileMenu({ open }) {
  if (!open) return null;

  return (
    <div className="md:hidden border-t bg-white">

      <div className="flex flex-col gap-4 p-5">

        <NavLinks mobile />

        <UserMenu />

      </div>

    </div>
  );
}
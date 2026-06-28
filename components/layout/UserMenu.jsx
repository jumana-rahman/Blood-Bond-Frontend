"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  const { data: session } = useSession();
  const role =
  session?.user?.role;
  const dashboardLink =
  role === "admin"
    ? "/dashboard/admin"
    : role === "volunteer"
    ? "/dashboard/volunteer"
    : "/dashboard/donor";

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut();

      toast.success("Logout Success");

      router.push("/");
      router.refresh();
    } catch {
      toast.error("Logout Failed");
    }
  };

  return (
    <div className="relative">

      <button
  onClick={() => setOpen(!open)}
  className="flex items-center gap-2"
>
  <Image
    src={
      session?.user?.image ||
      "/images/default-avatar.png"
    }
    alt={session?.user?.name || "User"}
    width={40}
    height={40}
    className="h-10 w-10 rounded-full object-cover border"
  />

  <div className="hidden md:block text-left">
    <p className="font-medium leading-none">
      {session?.user?.name}
    </p>

    <p className="text-xs text-gray-500 capitalize mt-1">
      {session?.user?.role}
    </p>
  </div>

  <ChevronDown size={18} />
</button>

      {open && (
        <div className="absolute right-0 top-12 w-52 rounded-xl border bg-white shadow-lg">

          <Link
  href={dashboardLink}
  className="block px-4 py-3 hover:bg-gray-100"
>
  Dashboard
</Link>

          <Link
            href="/profile"
            className="block px-4 py-3 hover:bg-gray-100"
          >
            Profile
          </Link>

          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-3 hover:bg-gray-100"
          >
            Logout
          </button>

        </div>
      )}

    </div>
  );
}
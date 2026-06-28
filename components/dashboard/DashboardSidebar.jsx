"use client";

import { X, LogOut } from "lucide-react";
import Link from "next/link";
import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import SidebarItem from "./SidebarItem";
import { sidebarMenus } from "@/lib/sidebarMenu";
import toast from "react-hot-toast";

export default function DashboardSidebar({
  open,
  setOpen,
}) {
    const { data: session } = useSession();
  
    const router = useRouter();
  
    const handleLogout = async () => {
      try {
        await authClient.signOut();
  
        toast.success("Logout Success");
  
        router.push("/");
        router.refresh();
      } catch {
        toast.error("Logout Failed");
      }
    };
  

    
  const pathname = usePathname();



  const role =
    session?.user?.role ||
    "donor";
    console.log("User Role:", role); // Debugging line to check the role value

  const menus =
    sidebarMenus[role] || [];

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 border-r z-50 transition-transform duration-300
        ${
          open
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="h-16 border-b flex items-center justify-between px-6">

          <h2 className="font-bold text-2xl">
            
            <Link
          
          href={"/"}
          className="font-medium transition hover:text-blue-600"
            
        >
          BloodConnect
        </Link>
          </h2>

          <button
            className="lg:hidden"
            onClick={() => setOpen(false)}
          >
            <X />
          </button>

        </div>

        <div className="p-4 space-y-2">

          {menus.map((menu) => (
            <SidebarItem
              key={menu.href}
              href={menu.href}
              icon={menu.icon}
              label={menu.label}
            />
          ))}

          <button
          onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50"
          >
            <LogOut size={20} />

            Logout
          </button>

        </div>

      </aside>
    </>
  );
}
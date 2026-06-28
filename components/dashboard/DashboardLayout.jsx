"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";


import { syncUserToDB } from "@/lib/syncUser";


import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

export default function DashboardLayout({
  children,
}) {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const {
    data: session,
    isPending,
  } = useSession();

  useEffect(() => {
 

    if (
      !isPending &&
      !session?.user
    ) {
      router.replace("/login");
    }

    console.log(
    "SESSION:",
    session
  );

  if (!session?.user) return;

  syncUserToDB(session);
  }, [
    session,
    isPending,
    router,
  ]);

  if (isPending) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">

      <DashboardSidebar
        open={open}
        setOpen={setOpen}
      />

      <div className="lg:ml-72">

        <DashboardNavbar
          setOpen={setOpen}
        />

        <main className="p-6">
          {children}
        </main>

      </div>

    </div>
  );
}
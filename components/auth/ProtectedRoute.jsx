"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useSession } from "@/lib/auth-client";

export default function ProtectedRoute({
  children,
  roles = [],
}) {
   const { data: session, isPending } =
    useSession();

  const router = useRouter();

  useEffect(() => {
    if (isPending) return;

    if (!session) {
      router.replace("/login");
      return;
    }

    if (
      roles.length &&
      !roles.includes(session.user.role)
    ) {
      router.replace("/unauthorized");
    }
  }, [session, isPending, router, roles]);

  if (isPending) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (!session) return null;

  if (
    roles.length &&
    !roles.includes(session.user.role)
  ) {
    return null;
  }

  return children;
}
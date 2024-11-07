"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }) {
  const router = useRouter();
  useEffect(() => {
    if (window.performance) {
      if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        router.push("/questionnaires");
      }
    }
  }, [router]);
  return <>{children}</>;
}

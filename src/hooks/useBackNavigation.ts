import { usePathname, useRouter } from "next/navigation";

export const useBackNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const goBack = () => {
    if (pathname.includes("question")) {
      router.back();
    } else {
      router.push("/questionnaires");
    }
  };

  const canGoBack = pathname !== "/questionnaires";

  return { goBack, canGoBack };
};

"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/elements";

export default function App() {
  const router = useRouter();

  return (
    <div>
      <Button variant="default" onClick={() => router.push("/questionnaires")}>
        Go to the list of questionnaires
      </Button>
    </div>
  );
}

"use client";

import Image from "next/image";
import "./styles.css";

import { useBackNavigation } from "@/hooks";

export const Header = () => {
  const { canGoBack, goBack } = useBackNavigation();

  return (
    <div className="header-container">
      {canGoBack ? (
        <Image
          src="/backBtn.svg"
          alt="back-btn"
          width="24"
          height="24"
          className="back-btn"
          onClick={goBack}
        />
      ) : (
        <div />
      )}
      <Image src="/logo.svg" alt="logo" width="20" height="20" />
      <div />
    </div>
  );
};

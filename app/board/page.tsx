import React from "react";
import { BoardPage } from "../BoardPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Board",
  description: "Write prayer requests in real-time!",
};

const Page = () => {
  return (
    <div className="h-screen overflow-hidden dark:bg-[url('/dark.svg')] bg-[url('/board-pattern.svg')]">
      <BoardPage />
    </div>
  );
};

export default Page;

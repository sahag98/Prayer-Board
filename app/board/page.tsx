import React from "react";
import { Room } from "../Room";
import { BoardPage } from "../BoardPage";

const Page = () => {
  return (
    <div className="h-screen overflow-hidden dark:bg-[url('/dark.svg')] bg-[url('/board-pattern.svg')]">
      <BoardPage />
    </div>
  );
};

export default Page;

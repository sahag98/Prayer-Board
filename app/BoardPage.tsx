"use client";

import { ModeToggle } from "@/components/toggleTheme";
import { useMyPresence, useOthers } from "@/liveblocks.config";
import { Cursor } from "./Cursor";
import { COLORS } from "@/constants";
import { BaseUserMeta, User } from "@liveblocks/client";
import LiveCursor from "@/components/LiveCursor";
import Modal from "@/components/Modal";
import { useState } from "react";
import { Cursors } from "@/components/cursors/Cursors";
import { Comments } from "@/components/comments/Comments";

export type Presence = any;

export type LiveCursorProps = {
  others: readonly User<Presence, BaseUserMeta>[];
};

export function BoardPage() {
  return (
    <div className="h-screen">
      <Cursors />
      <div className="bg-red-400">
        <Comments />
      </div>
      <section className="absolute top-5 right-5 lg:top-10 lg:right-20">
        <ModeToggle />
      </section>
    </div>
  );
}

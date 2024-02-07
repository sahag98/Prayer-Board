"use client";

import { ModeToggle } from "@/components/toggleTheme";
import { useMyPresence, useOthers } from "@/liveblocks.config";
import { Cursor } from "./Cursor";
import { COLORS } from "@/constants";
import { BaseUserMeta, User } from "@liveblocks/client";
import LiveCursor from "@/components/LiveCursor";

export type Presence = any;

export type LiveCursorProps = {
  others: readonly User<Presence, BaseUserMeta>[];
};

export function BoardPage() {
  const [myPresence, updateMyPresence] = useMyPresence();

  function handlePointerMove(e: any) {
    const cursor = { x: Math.floor(e.clientX), y: Math.floor(e.clientY) };
    console.log(cursor);
    updateMyPresence({ cursor });
  }

  function handlePointerLeave(e: any) {
    updateMyPresence({ cursor: null });
  }

  const others = useOthers();

  return (
    <div
      className="h-screen"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <LiveCursor others={others} />

      <section className="absolute top-5 right-5 lg:top-10 lg:right-20">
        <ModeToggle />
      </section>
    </div>
  );
}

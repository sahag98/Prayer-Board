"use client";

import React, { memo } from "react";
import { useOther } from "@/liveblocks.config";
import { getCoordsFromAccurateCursorPositions } from "@/lib/coords";
import { motion } from "framer-motion";

type Props = {
  connectionId: number;
};

function CursorComponent({ connectionId }: Props) {
  // Get this user's cursor positions from presence
  const info = useOther(connectionId, (other) => other.info);
  const cursor = useOther(connectionId, (other) => other.presence.cursor);

  if (!cursor || !info) {
    return null;
  }
  console.log("position");
  // Convert CSS selectors and x/y percentage into x/y px on page
  const position = getCoordsFromAccurateCursorPositions(cursor);

  if (!position) {
    return null;
  }

  const coords = { x: position.x, y: position.y };

  return (
    <svg
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: `translateX(${position.x}px) translateY(${position.y}px)`,
      }}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="red"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m13.67 6.03-11-4a.5.5 0 0 0-.64.64l4 11a.5.5 0 0 0 .935.015l1.92-4.8 4.8-1.92a.5.5 0 0 0 0-.935h-.015Z"
        fill="red"
      />
    </svg>
  );
}

export const Cursor = memo(CursorComponent);

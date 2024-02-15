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

  console.log("info: ", info);

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
    <div
      className="select-none pointer-events-none z-10"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: `translateX(${position.x}px) translateY(${position.y}px)`,
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m13.67 6.03-11-4a.5.5 0 0 0-.64.64l4 11a.5.5 0 0 0 .935.015l1.92-4.8 4.8-1.92a.5.5 0 0 0 0-.935h-.015Z"
          style={{
            fill: info.color,
          }}
          fill="currentFill"
        />
      </svg>
      <span
        className="shadow-sm -ml-1 mt-3 rounded-md py-0 px-2 font-medium h-7 inline-flex items-center"
        style={{
          backgroundColor: info.color,
        }}
      >
        {info.name}
      </span>
    </div>
  );
}

export const Cursor = memo(CursorComponent);

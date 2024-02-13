"use client";

import { ClientSideSuspense } from "@liveblocks/react";
import { CommentsOverlay } from "@/components/comments/CommentsOverlay";
import { Toolbar } from "@/components/comments/Toolbar";
import { ErrorBoundary } from "react-error-boundary";

export function Comments() {
  return (
    /* @ts-ignore */
    <ErrorBoundary
      fallback={<div>An error occurred while loading threads.</div>}
    >
      <ClientSideSuspense fallback={null}>
        {() => (
          <>
            <Toolbar />
            <CommentsOverlay />
          </>
        )}
      </ClientSideSuspense>
    </ErrorBoundary>
  );
}

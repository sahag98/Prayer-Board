"use client";

import { ModeToggle } from "@/components/toggleTheme";
import { useSelf } from "@/liveblocks.config";

import { BaseUserMeta, User } from "@liveblocks/client";

import { Cursors } from "@/components/cursors/Cursors";
import { Comments } from "@/components/comments/Comments";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type Presence = any;

export type LiveCursorProps = {
  others: readonly User<Presence, BaseUserMeta>[];
};

export function BoardPage() {
  const currentUser = useSelf();

  console.log(currentUser);
  return (
    <div className="h-screen w-full overflow-hidden">
      <Cursors />
      <div className="bg-red-400">
        <Comments />
      </div>

      <Accordion
        className="absolute top-5 lg:w-1/4 w-1/3 border rounded-md px-4 z-50 bg-white left-5"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold">
            Instructions:
          </AccordionTrigger>
          <AccordionContent>
            - Click on the + button located on the toolbar to write a prayer
            request.
          </AccordionContent>
          <AccordionContent>
            - Reply to a prayer by pressing on their avatar located on the
            prayerboard.
          </AccordionContent>
          <AccordionContent>
            - Right next to the + button are the avatars of all online users.
          </AccordionContent>
          <AccordionContent>
            - The prayer board is best used on large devices such as laptops or
            pcs.
          </AccordionContent>
          <AccordionContent className="border-t pt-2">
            Lets pray and encourage one another through this prayer board. May
            God bless you and we hope this board is fruitful to you!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

"use client";

import { BaseUserMeta, User } from "@liveblocks/client";

import { Cursors } from "@/components/cursors/Cursors";
import { Comments } from "@/components/comments/Comments";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export type Presence = any;

export type LiveCursorProps = {
  others: readonly User<Presence, BaseUserMeta>[];
};

export function BoardPage() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
    };

    // Initial check on component mount
    handleResize();

    // Add resize event listener to update on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden">
      <Cursors />
      <div className="bg-red-400">
        <Comments />
      </div>
      <AlertDialog open={isMobile}>
        <AlertDialogContent className="rounded-md w-3/4">
          <AlertDialogHeader>
            <AlertDialogTitle>Do you want to proceed?</AlertDialogTitle>
            <AlertDialogDescription>
              Due to mouse tracking functionalities, the board is best used on
              laptops or pcs.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => router.push("/")}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => setIsMobile(false)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Accordion
        className="absolute top-5 lg:w-1/4 border rounded-md px-4 z-50 bg-white left-5"
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

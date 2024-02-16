"use client";

import { Button } from "@/components/ui/button";
import {
  useMutation,
  useOthers,
  useStorage,
  useUpdateMyPresence,
} from "@/liveblocks.config";
import { LiveObject } from "@liveblocks/client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Textarea } from "@/components/ui/textarea";
import { Star, User } from "lucide-react";
import Footer from "@/components/footer";

function SomeoneIsTyping() {
  const someoneIsTyping = useOthers((others) =>
    others.some((other) => other.presence.isTyping)
  );

  return (
    <div className=" text-black text-xs h-10">
      {someoneIsTyping ? "Someone is writing a review..." : ""}
    </div>
  );
}

export default function Home() {
  const others = useOthers();
  const userCount = others.length;
  const [fillStars, setfillStars] = useState(0);
  const [draft, setDraft] = useState("");
  const updateMyPresence = useUpdateMyPresence();
  const reviews = useStorage((root) => root.reviews);

  const addTodo = useMutation(
    ({ storage }, text: string, stars: number, createdAt: string) => {
      storage.get("reviews").push(new LiveObject({ text, stars, createdAt }));
    },
    []
  );

  const addStar = (index: number) => {
    console.log(index);
    setfillStars(index);
  };

  return (
    <>
      <main className="flex relative  min-h-screen flex-col items-center justify-center lg:px-24 md:px-10 px-4">
        <a
          className="w-52 hidden lg:flex mb-10 self-end fixed bottom-0  z-10 "
          href="https://www.buymeacoffee.com/prayse"
        >
          <img
            alt="support button image"
            src="https://img.buymeacoffee.com/button-api/?text=Support Prayse&emoji=✝️&slug=prayse&button_colour=5F7FFF&font_colour=ffffff&font_family=Bree&outline_colour=000000&coffee_colour=FFDD00"
          />
        </a>

        <a
          className="w-44 lg:hidden mb-10 self-end fixed top-5 z-10 "
          href="https://www.buymeacoffee.com/prayse"
          target="_blank"
        >
          <img
            alt="support button image"
            src="https://img.buymeacoffee.com/button-api/?text=Support Prayse&emoji=✝️&slug=prayse&button_colour=5F7FFF&font_colour=ffffff&font_family=Bree&outline_colour=000000&coffee_colour=FFDD00"
          />
        </a>

        <div className="flex flex-col relative w-full  md:w-full lg:w-fit items-center mb-16 mt-72 bg-[url('/pattern.svg')] dark:bg-[url('/dark-pattern.svg')] bg-contain p-2">
          <div className="relative flex gap-1">
            <h1 className="lg:text-5xl md:text-5xl text-4xl font-extrabold tracking-wider dark:text-white mb-1">
              Prayse Board
            </h1>
            <span className="font-bold text-blue-500 text-xl">BETA</span>
          </div>

          <p className="mb-3 bg-clip-text text-transparent inline-block bg-gradient-to-r from-fuchsia-500 to-cyan-600 dark:text-gray-700">
            Write <span className="font-bold">anonymous</span> prayer requests
            and respond in <span className="font-bold">Real-Time.</span>
          </p>

          <Link className="mb-2" href="/board">
            <Button className="dark:bg-[#bccdf9] font-semibold">
              Get Started 🙏
            </Button>
          </Link>
          <div className="border text-xs dark:border-gray-600 border-gray-300 rounded-full px-2 py-1">
            There are {userCount} other user(s) online
          </div>
        </div>

        <div className="lg:w-full lg:px-0  md:w-full lg:mt-0 md:mt-10 mt-10 w-full flex flex-col items-center">
          <Image
            className="border lg:w-1/2 md:w-full w-full rounded-lg"
            src="/intro.gif"
            width={600}
            height={299}
            alt="gif"
          />

          <section className="mt-10 pb-10 w-full flex flex-col items-center justify-center">
            <h2 className="font-semibold text-2xl">Reviews</h2>
            <p className="text-sm mb-5">
              Thank you for trying our prayer board! Please feel free to provide
              some feedback on it&apos;s features so that we can make our prayer
              board better and find new ways to better serve you.
            </p>
            <Textarea
              className="lg:w-3/4 md:w-full w-full resize-none"
              placeholder="Write a review..."
              value={draft}
              onChange={(e) => {
                setDraft(e.target.value);
                updateMyPresence({ isTyping: true });
              }}
              onBlur={() => updateMyPresence({ isTyping: false })}
            />
            <div className="flex lg:w-3/4 items-center justify-between w-full  gap-2">
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    onClick={() => addStar(index)}
                    key={index}
                    className="cursor-pointer"
                  >
                    <Star
                      fill={fillStars >= index ? "yellow" : "white"}
                      size={30}
                    />
                  </div>
                ))}
              </div>
              <Button
                onClick={() => {
                  if (draft) {
                    const today = new Date().toString();
                    console.log(today);
                    updateMyPresence({ isTyping: false });
                    addTodo(draft, fillStars, today);
                    setDraft("");
                    setfillStars(0);
                  }
                }}
                disabled={draft.length == 0 ? true : false}
                className="self-end mt-4"
              >
                Send
              </Button>
            </div>

            <SomeoneIsTyping />
            {reviews.length == 0 ? (
              <div className="flex w-full pb-5 items-center justify-center">
                <p className="text-center rounded-md font-semibold">
                  No Reviews yet!
                </p>
              </div>
            ) : (
              <section className="grid w-full  grid-cols-1 lg:grid-cols-3 place-items-center gap-10">
                {reviews.map((review, index) => {
                  const date = new Date(review.createdAt);
                  console.log(date.getDay());
                  return (
                    <div
                      className="p-2 border w-full rounded-md bg-primary flex flex-col gap-5"
                      key={index}
                    >
                      <section className="flex w-full items-center justify-between">
                        <div className="flex items-center gap-2">
                          <User size={35} color="white" />
                          <h3 className="text-primary-foreground font-semibold">
                            Anonymous
                          </h3>
                        </div>
                        <span className="text-gray-400 text-xs">
                          {date.toDateString()}
                        </span>
                      </section>
                      <p className="text-primary-foreground">{review.text}</p>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <div key={index}>
                            <Star
                              fill={review.stars >= index ? "yellow" : "white"}
                              size={30}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </section>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

"use client";

import { ModeToggle } from "@/components/toggleTheme";
import { Button } from "@/components/ui/button";
import { useOthers } from "@/liveblocks.config";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const others = useOthers();
  const userCount = others.length;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center lg:p-24 p-4">
      <div className="flex flex-col items-center bg-[url('/pattern.svg')] dark:bg-[url('/dark-pattern.svg')] bg-contain p-5">
        <h1 className="text-5xl font-bold dark:text-white mb-2">
          Prayer Board
        </h1>
        <p className="mb-3 bg-clip-text text-transparent inline-block bg-gradient-to-r from-fuchsia-500 to-cyan-500 dark:text-gray-500">
          Write praye requests and pray for one another in{" "}
          <span className="font-bold">Real Time.</span>
        </p>
        <Link className="mb-2" href="/board">
          <Button className="dark:bg-[#bccdf9] font-semibold">
            Get Started 🙏
          </Button>
        </Link>
        <div className="border text-xs dark:border-gray-600 border-gray-300 rounded-full p-2">
          There are {userCount} other user(s) online
        </div>
      </div>
      <div className="fixed bottom-0 flex items-center">
        <span>By </span>
        <Image
          className="w-36 dark:invert"
          alt="prayse logo"
          src="/footer.png"
          width={200}
          height={100}
        />
      </div>
      <section className="absolute top-5 right-5 lg:top-10 lg:right-20">
        {" "}
        <ModeToggle />
      </section>
    </main>
  );
}

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
    <main className="flex relative  min-h-screen flex-col items-center justify-center lg:px-24 md:px-10 px-4">
      <a
        className="w-52 hidden lg:flex mb-10 self-end fixed bottom-0  z-10 "
        href="https://www.buymeacoffee.com/prayse"
      >
        <img src="https://img.buymeacoffee.com/button-api/?text=Support Prayse&emoji=❤️&slug=prayse&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
      </a>

      <a
        className="w-40 lg:hidden mb-10 self-end fixed top-5 z-10 "
        href="https://www.buymeacoffee.com/prayse"
        target="_blank"
      >
        <img src="https://img.buymeacoffee.com/button-api/?text=Support Prayse&emoji=❤️&slug=prayse&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
      </a>

      <div className="flex flex-col  md:w-full lg:w-fit items-center mb-24 bg-[url('/pattern.svg')] dark:bg-[url('/dark-pattern.svg')] bg-contain p-5">
        <h1 className="text-5xl font-bold dark:text-white mb-1">
          Prayer Board
        </h1>
        {/* <p className="mb-3 bg-clip-text text-transparent inline-block bg-gradient-to-r from-fuchsia-500 to-cyan-500 dark:text-gray-500">
          Write praye requests and pray for one another in{" "}
          <span className="font-bold">Real Time.</span>
        </p> */}
        <p className="mb-3 text-gray-600">
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
      <div className="lg:w-2/5 lg:px-0 px-4 md:w-2/3 lg:-bottom-52 md:-bottom-20 -bottom-24 w-full absolute flex flex-col items-center">
        <Image
          className="border w-full rounded-lg"
          src="/try.gif"
          width={600}
          height={378}
          alt="gif"
        />
        <div className="flex items-center align-bottom">
          <span>By </span>
          <Image
            className="w-36 dark:invert"
            alt="prayse logo"
            src="/footer.png"
            width={200}
            height={100}
          />
        </div>
      </div>

      {/* <section className="absolute top-5 right-5 lg:top-10 lg:right-20">
        {" "}
        <ModeToggle />
      </section> */}
    </main>
  );
}

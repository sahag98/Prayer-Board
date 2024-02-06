import { ModeToggle } from "@/components/toggleTheme";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-5xl font-bold dark:text-white mb-2">Prayer Board</h1>
      <p className="mb-5 dark:text-gray-500">
        Write praye requests and pray for one another in{" "}
        <span className="font-bold">Real Time.</span>
      </p>
      <Button className="dark:bg-[#bccdf9] font-semibold">
        Get Started 🙏
      </Button>
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
      <section className="absolute top-10 right-20">
        {" "}
        <ModeToggle />
      </section>
    </main>
  );
}

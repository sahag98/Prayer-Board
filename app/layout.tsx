import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Room } from "./Room";
import { TooltipProvider } from "@/components/ui/tooltip";

const workSans = Work_Sans({
  subsets: ["latin"],

  weight: ["300", "400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Prayse Board",
  description:
    "Write anonymous prayer requests and pray for one another in Real Time.",
  authors: [{ name: "Prayse", url: "https://www.prayse.app/" }],
  keywords: [
    "prayer",
    "pray",
    "real-time",
    "prayse",
    "anonymous",
    "prayforpeople",
    "prayer board",
    "liveblocks",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={workSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Room>
            <TooltipProvider>{children}</TooltipProvider>
          </Room>
        </ThemeProvider>
      </body>
    </html>
  );
}

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
  title: "Prayer Board",
  description: "Prayer Board by Prayse",
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
          enableSystem
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

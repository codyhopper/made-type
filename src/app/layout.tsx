import type { Metadata } from "next";
import { openGraphImage } from '../lib/shared-metadata';
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "../providers/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "made–type Foundry",
    description: "Bespoke typefaces drawn from everyday phenomena.",
    openGraph: {
        ...openGraphImage,
        title: "made–type Foundry",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                id="main-content"
                className={`
                    text-zinc-800 bg-zinc-100
                    dark:text-zinc-200 dark:bg-zinc-950
                    ${geistSans.variable} ${geistMono.variable} antialiased`
                }
            >
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}

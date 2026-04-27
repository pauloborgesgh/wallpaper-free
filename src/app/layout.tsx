import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
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
  title: "Wallpapers BR",
  description: "Galeria de wallpapers gratuitos com categorias e downloads rápidos.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('wallpaper-theme');
                  if (theme && ['light', 'dark', 'oled'].includes(theme)) {
                    document.documentElement.setAttribute('data-theme', theme);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-H07MGGD7B9"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-H07MGGD7B9');
        `}
      </Script>
      <Script
        id="aclib-run"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var script = document.createElement('script');
              script.src = 'https://acdn.agora.io/adb/auto.js';
              script.async = true;
              script.defer = true;
              document.head.appendChild(script);
              script.onload = function() {
                aclib.runAutoTag({
                  zoneId: 'ev1kblh9qv',
                });
              };
            })();
          `
        }}
      />
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sara Johari",
  description: "Personal website of Sara Johari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

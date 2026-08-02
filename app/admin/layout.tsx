import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Admin — Wellstar Drilling",
  robots: { index: false, follow: false },
};

const navLinks = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/workers", label: "Workers" },
  { href: "/admin/payroll", label: "Payroll" },
  { href: "/admin/expenses", label: "Expenses" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider afterSignOutUrl="/sign-in">
      <div className={`${inter.className} min-h-screen bg-gray-50 text-gray-800`}>
        <header className="sticky top-0 z-10 border-b bg-white/95 backdrop-blur shadow-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-8">
              <Link href="/admin" className="flex items-center gap-2.5">
                <Image
                  src="/images/logo3.png"
                  alt="Wellstar Drilling icon"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover shadow-md"
                />
                <div className="leading-none">
                  <p className="text-primary-dark text-lg font-extrabold uppercase tracking-widest leading-none">
                    Wellstar
                  </p>
                  <p className="text-primary mt-1 text-[9px] font-bold uppercase tracking-[0.3em] leading-none">
                    — Admin —
                  </p>
                </div>
              </Link>
              <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 sm:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <UserButton />
          </div>
          <nav className="flex items-center gap-5 overflow-x-auto border-t bg-white px-4 py-2 text-sm font-medium text-gray-600 sm:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary whitespace-nowrap transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">{children}</main>
      </div>
    </ClerkProvider>
  );
}

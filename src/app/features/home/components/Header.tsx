"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";

export function Header() {
  const { isSignedIn } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-sm flex items-center justify-center">
            <Link href={"/"}>
              <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
            </Link>
          </div>
          <span className="text-xl font-bold text-foreground">Resonance</span>
        </div>
        {isSignedIn && (
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/products"
              className="text-sm text-foreground/70 hover:text-foreground transition"
            >
              Products
            </Link>
            <Link
              href="/solutions"
              className="text-sm text-foreground/70 hover:text-foreground transition"
            >
              Solutions
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-foreground/70 hover:text-foreground transition"
            >
              Pricing
            </Link>
            <Link
              href="/blogs"
              className="text-sm text-foreground/70 hover:text-foreground transition"
            >
              Blog
            </Link>
          </div>
        )}
        <div className="flex items-center gap-3">
          {!isSignedIn ? (
            <>
              <Button variant="outline" className="hidden sm:inline-flex">
                <Link href={"/sign-in"}>Sign In</Link>
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/sign-up">
                Get Started
              </Link>
              </Button>
            </>
          ) : (
            <Button variant="outline" className="hidden sm:inline-flex">
              <Link href={"/dashboard"}>Dashboard</Link>
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}

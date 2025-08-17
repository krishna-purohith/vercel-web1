import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto max-w-7xl flex items-center justify-between h-16 px-4">
        <Link href="/">MyApp</Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/features"
            className="text-sm font-medium text-foreground/70 hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-foreground/70 hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-bold text-foreground/70 hover:text-foreground"
          >
            About
          </Link>
        </nav>

        <div>
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signout">Signout</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

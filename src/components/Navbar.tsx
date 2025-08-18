"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between p-4 border-b border-border">
      <Link href="/" className="font-bold text-xl">
        VercelClone
      </Link>
      <div className="flex gap-4 items-center">
        {user ? (
          <>
            <span>{user.email}</span>
            <Button variant="default" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link href="/login">
              <Button variant="default">Login</Button>
            </Link>
            <Link href="/signup">
              <Button variant="secondary">Signup</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

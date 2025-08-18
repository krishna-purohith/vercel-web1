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
            <button onClick={logout} className="btn-primary">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="btn-primary">
              Login
            </Link>
            <Link href="/signup" className="btn-secondary">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

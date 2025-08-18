import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-between">
      <Link href="/dashboard">Dashboard</Link>
      <Button className="items-center">Page</Button>
    </div>
  );
}

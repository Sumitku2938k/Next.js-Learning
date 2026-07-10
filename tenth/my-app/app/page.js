"use client"

import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();

  return (
    <div>
      Hey, this is our page and blog is {searchParams.get("blog")} and user is {searchParams.get("user")}
    </div>
  );
}

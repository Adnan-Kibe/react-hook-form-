import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
        <Button asChild>
          <Link href={'/register'}> Go to Register Form</Link>
        </Button>
    </main>
  );
}

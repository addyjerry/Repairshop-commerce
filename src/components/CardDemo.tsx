import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import iron from "../assets/images/iron1.jpg";

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <Image
          src={iron}
          alt="iron"
          width={300}
          height={300}
          className="rounded-md"
        />
      </CardContent>

      <CardFooter
        className="flex-row 
      justify-between gap-2"
      >
        <h2 className="font-bold">GHC 1,200</h2>
        <Button>Buy</Button>
      </CardFooter>
    </Card>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { useEffect, useState } from "react";

interface dataType {
  image: string;
  price: number;
  name: string;
}

export function CardDemo() {
  async function getData() {
    return client.fetch(groq`*[_type=='product']`);
  }
  const [post, setPost] = useState<dataType | null>(null);
  useEffect(() => {
    getData()
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.log("error fetching product"), error;
      });
  });

  return (
    <>
      <Card className="w-full max-w-sm">
        <CardContent>
          <Image
            src={post?.image}
            alt={post?.name}
            width={300}
            height={300}
            className="rounded-md"
          />
        </CardContent>

        <CardFooter
          className="flex-row 
      justify-between gap-2"
        >
          <h2 className="font-bold">GHC {post?.price}</h2>
          <Button>Buy</Button>
        </CardFooter>
      </Card>
      ;
    </>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { useEffect, useState } from "react";

interface DataType {
  image: string;
  price: number;
  name: string;
  _id: string; // Added for unique key
}

async function getData() {
  return client.fetch<DataType[]>(groq`*[_type=="tvproduct"] {
    _id,
    name,
    price,
    "image": image.asset->url
  }`);
}

export function TvCard() {
  const [posts, setPosts] = useState<DataType[]>([]); // Changed to array

  useEffect(() => {
    getData()
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []); // Added empty dependency array

  return (
    <div className="flex gap-3">
      {posts.map((product) => (
        <Card className="w-full max-w-sm" key={product._id}>
          <CardContent>
            {product.image && (
              <Image
                src={product.image}
                alt={product.name || "Product image"}
                width={300}
                height={300}
                className="rounded-md"
              />
            )}
          </CardContent>
          <CardFooter className="flex-row justify-between gap-2">
            <h2 className="font-bold">GHC {product.price}</h2>
            <Button>Buy</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

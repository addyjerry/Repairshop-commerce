"use client";
import { useState } from "react";
import { Input } from "./ui/input";

export default function Searchbar() {
  const [textInput, setTextInput] = useState<string>("");
  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
    e.preventDefault();
  };
  return (
    <div>
      <Input
        placeholder="search"
        onChange={handleTextInput}
        value={textInput}
        className="w-100"
      />
    </div>
  );
}

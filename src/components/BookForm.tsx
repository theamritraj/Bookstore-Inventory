import { useForm } from "react-hook-form";
import { useBooks } from "../context/BookContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@radix-ui/react-select";
import { useState } from "react";

export default function BookForm() {
  const { addBook } = useBooks();
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [genre, setGenre] = useState("");

  interface FormData {
    title: string;
    author: string;
    price: string;
  }

  const onSubmit = (data: FormData) => {
    addBook({ ...data, id: crypto.randomUUID(), genre, price: parseFloat(data.price) });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input {...register("title", { required: true })} placeholder="Book Title" />
      <Input {...register("author", { required: true })} placeholder="Author Name" />
      <Select onValueChange={setGenre}>
        <SelectTrigger>Genre</SelectTrigger>
        <SelectContent>
          <SelectItem value="Fiction">Fiction</SelectItem>
          <SelectItem value="Non-Fiction">Non-Fiction</SelectItem>
          <SelectItem value="Sci-Fi">Sci-Fi</SelectItem>
        </SelectContent>
      </Select>
      <Input {...register("price", { required: true })} placeholder="Price" type="number" />
      <Button type="submit">Add Book</Button>
    </form>
  );
}

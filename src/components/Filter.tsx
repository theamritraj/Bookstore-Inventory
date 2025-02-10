// import { useBooks } from "../context/BookContext";
// import { Input } from "@/components/ui/input";
// import { useState } from "react";

// export default function Filter() {
//   const { books } = useBooks();
//   const [query, setQuery] = useState("");

//   const filteredBooks = books.filter(book =>
//     book.title.toLowerCase().includes(query.toLowerCase()) ||
//     book.author.toLowerCase().includes(query.toLowerCase()) ||
//     book.genre.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div>
//       <Input placeholder="Search by title, author, genre..." value={query} onChange={(e) => setQuery(e.target.value)} />
//       <ul>
//         {filteredBooks.map((book) => (
//           <li key={book.id}>{book.title} - {book.author} - {book.genre}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

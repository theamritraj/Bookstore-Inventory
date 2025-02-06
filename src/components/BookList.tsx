import React, { useState } from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  price: number;
}

const BookList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", price: 10 },
    { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian", price: 15 },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic", price: 12 },
    { id: 4, title: "Moby Dick", author: "Herman Melville", genre: "Adventure", price: 20 },
  ]);

  // 🔍 Filter books based on search query and price range
  const filteredBooks = books.filter((book) => {
    const matchesSearch = `${book.title} ${book.author} ${book.genre}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesPrice =
      (minPrice === "" || book.price >= minPrice) &&
      (maxPrice === "" || book.price <= maxPrice);

    return matchesSearch && matchesPrice;
  });

  // 🗑 Delete a book
  const deleteBook = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">📚 Book Inventory</h2>

      {/* 🔍 Search & Price Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by title, author, or genre..."
          className="w-full md:w-1/3 p-2 border rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Price ($)"
          className="w-full md:w-1/6 p-2 border rounded-md"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : "")}
        />
        <input
          type="number"
          placeholder="Max Price ($)"
          className="w-full md:w-1/6 p-2 border rounded-md"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : "")}
        />
      </div>

      {/* 📖 Book List Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Title</th>
            <th className="border p-2">Author</th>
            <th className="border p-2">Genre</th>
            <th className="border p-2">Price ($)</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <tr key={book.id} className="border">
                <td className="border p-2">{book.title}</td>
                <td className="border p-2">{book.author}</td>
                <td className="border p-2">{book.genre}</td>
                <td className="border p-2">${book.price}</td>
                <td className="border p-2 text-center">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">Edit</button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                    onClick={() => deleteBook(book.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center p-4 text-gray-500">No books found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;

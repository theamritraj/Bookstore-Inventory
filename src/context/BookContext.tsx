import { createContext, useState, useContext, ReactNode } from "react";

type Book = {
  id: string;
  title: string;
  author: string;
  genre: string;
  price: number;
};

type BookContextType = {
  books: Book[];
  addBook: (book: Book) => void;
  updateBook: (id: string, updatedBook: Book) => void;
  deleteBook: (id: string) => void;
};

const BookContext = createContext<BookContextType | undefined>(undefined);

export function BookProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<Book[]>([]);

  const addBook = (book: Book) => {
    setBooks((prev) => [...prev, book]);
  };

  const updateBook = (id: string, updatedBook: Book) => {
    setBooks((prev) => prev.map((b) => (b.id === id ? updatedBook : b)));
  };

  const deleteBook = (id: string) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, updateBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
}

export function useBooks() {
  const context = useContext(BookContext);
  if (!context) throw new Error("useBooks must be used within a BookProvider");
  return context;
}

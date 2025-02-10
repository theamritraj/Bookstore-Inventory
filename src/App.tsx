import { BookProvider } from "./context/BookContext";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
// import Filter from "./components/Filter";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BookProvider>
      <Header/>
      <BookForm />
      {/* <Filter /> */}
      <BookList />
      <Footer/>
    </BookProvider>
  );
}

export default App;

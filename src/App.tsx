import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/HomePage";
import NewQuestion from "./pages/NewQuestionPage";
import NotFound from "./pages/NotFoundPage";
import Profile from "./pages/ProfilePage";
import SearchResult from "./pages/SearchResultPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchResult" element={<SearchResult />} />
        <Route path="/newQuestion" element={<NewQuestion />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomePage";
import NewQuestion from "./pages/NewQuestionPage";
import NotFound from "./pages/NotFoundPage";
import SearchResult from "./pages/SearchResultPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/searchResult" element={<SearchResult />} />
      <Route path="/newQuestion" element={<NewQuestion />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

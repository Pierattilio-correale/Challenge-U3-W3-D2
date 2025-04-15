import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticlesComponent from "./Components/ArticlesComponent";

import ArticleDetails from "./Components/ArticleDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ArticlesComponent />} />
          <Route path="/ArticleDetails/:MyID" element={<ArticleDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

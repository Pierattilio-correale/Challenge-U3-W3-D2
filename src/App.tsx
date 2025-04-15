import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticlesComponent from "./Components/ArticlesComponent";
import ArticleDetails from "./Components/ArticleDetails";
import Home from "./Components/Home";

import MyFooter from "./Components/Footer";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <Home />

          <main className=" flex-grow-1">
            <Routes>
              <Route path="/" element={<ArticlesComponent />} />
              <Route
                path="/ArticleDetails/:MyID"
                element={<ArticleDetails />}
              />
              <Route element={<NotFound />} path="*" />
            </Routes>
          </main>
          <div className="bg-black mt-4">
            <MyFooter />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

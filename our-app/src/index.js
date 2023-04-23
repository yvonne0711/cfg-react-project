import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import NoPage from "./pages/NoPage";
import Results from "./pages/Results";
import ResultsFT from "./pages/ResultsFT";
import ResultsBST from "./pages/ResultsBST";
import ResultsVT from "./pages/ResultsVT";
import ResultsCT from "./pages/ResultsCT";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NoPage />} />
          <Route path="About" element={<About />} />
          <Route path="Quiz" element={<Quiz />} />
          <Route path="*" element={<Home />} />
          <Route path="Results" element={<Results />} />
          <Route path="ResultsFT" element={<ResultsFT />} />
          <Route path="ResultsBST" element={<ResultsBST />} />
          <Route path="ResultsVT" element={<ResultsVT />} />
          <Route path="ResultsCT" element={<ResultsCT />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import NoPage from "./pages/NoPage";
import Results from "./pages/Results";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
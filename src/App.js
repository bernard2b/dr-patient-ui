import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientFetch from "./components/client/ClientFetch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/patients" element={<ClientFetch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

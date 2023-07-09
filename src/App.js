import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientFetch from "./components/client/ClientFetch";
import CreateClient from "./components/client/CreateClient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/patients" element={<ClientFetch />} />
        <Route path="/create-patient" element={<CreateClient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientFetch from "./components/client/ClientFetch";
import CreateClient from "./components/client/CreateClient";
import DoctorFetch from "./components/DoctorFetch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/patients" element={<ClientFetch />} />
        <Route path="/create-patient" element={<CreateClient />} />
        <Route path="/doctors" element={<DoctorFetch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

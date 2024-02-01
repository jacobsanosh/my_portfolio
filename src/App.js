import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop.js";
import { MainPage,LoginPage,UserPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/user" element={<UserPage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

import "./styles.scss";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import Home from "./pages/Home/Home.tsx";
import Edit from "./pages/Edit/Edit.tsx";
import Moments from "./pages/Moments.tsx";
import OCR from "./pages/OCR/OCR.tsx";
import { Routes, Route } from "react-router-dom";
import Flashcards from "./pages/Flashcards/Flashcards.tsx";

function App() {
    return (
        <main className="flex">
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/moments" element={<Moments />} />
                <Route path="/cards" element={<Flashcards />} />
                <Route path='/ocr' element={<OCR />} />
            </Routes>
        </main>
    );
}

export default App;

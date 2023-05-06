import "./styles.scss";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import Home from "./pages/Home";
import Edit from "./pages/Edit/Edit.tsx";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <main className="flex">
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/edit" element={<Edit />} />
            </Routes>
        </main>
    );
}

export default App;

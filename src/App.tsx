import './styles.scss'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Edit from './pages/Edit'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <main className="flex">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </main>
  )
}

export default App

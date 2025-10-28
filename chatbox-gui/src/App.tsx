import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import ChatPage from './pages/ChatPage'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/chat" replace />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="*" element={<Navigate to="/chat" replace />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

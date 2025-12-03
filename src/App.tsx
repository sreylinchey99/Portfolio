import { Routes, Route } from 'react-router-dom'
import HomePage from './components/Pages/HomePage'
import ProjectDetailPage from './components/Pages/ProjectDetailPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:projectId" element={<ProjectDetailPage />} />
    </Routes>
  )
}

export default App
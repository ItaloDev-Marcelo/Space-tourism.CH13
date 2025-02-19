import "./App.css"
import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Destination from "./pages/Destination"
import Crew from "./pages/Crew"
import Tecnhology from "./pages/Tecnhology"
import Error404 from "./pages/Error"
function App() {

  return (
       <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/tecnhology" element={<Tecnhology />} />
       </Routes>
    
  )
}

export default App


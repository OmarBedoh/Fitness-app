import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import ClientsPage from "./features/clients/pages/ClientsPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/clients" element={<ClientsPage />} />
    </Routes>
  )
}

export default App
import SchedulingPage from "./features/scheduling/pages/SchedulingPage"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/clients" element={<ClientsPage />} />
    </Routes>
  )
}
import SchedulingPage from "./features/scheduling/pages/SchedulingPage"
<Route path="/schedule" element={<SchedulingPage />} />
import { Routes, Route } from "react-router-dom"
import AppShell from "./layout/AppShell"
import Dashboard from "./pages/Dashboard"
import ClientsPage from "./features/clients/pages/ClientsPage"
import SchedulingPage from "./features/scheduling/pages/SchedulingPage"

function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/schedule" element={<SchedulingPage />} />
      </Routes>
    </AppShell>
  )
}

export default App
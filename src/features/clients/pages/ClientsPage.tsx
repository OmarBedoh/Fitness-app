import AppShell from "../../../layout/AppShell"
import { useClients } from "../useClients"
import AddClientForm from "../components/AddClientForm"

export default function ClientsPage() {
  const { clients, addClient } = useClients()

  return (
    <AppShell>
      <h1 style={{ fontSize: "20px", marginBottom: "16px" }}>
        Clients
      </h1>

      <AddClientForm onAdd={addClient} />

      <div
        style={{
          border: "1px solid var(--border-subtle)",
          background: "var(--bg-surface)",
        }}
      >
        {clients.map(c => (
          <div
            key={c.id}
            style={{
              padding: "12px",
              borderBottom: "1px solid var(--border-subtle)"
            }}
          >
            {c.name} — {c.email}
          </div>
        ))}
      </div>
    </AppShell>
  )
}
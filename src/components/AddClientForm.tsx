import { useState } from "react"

export default function AddClientForm({ onAdd }: any) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  function submit() {
    onAdd({
      id: crypto.randomUUID(),
      name,
      email,
    })

    setName("")
    setEmail("")
  }

  return (
    <div
      style={{
        border: "1px solid var(--border-subtle)",
        padding: "16px",
        background: "var(--bg-surface)",
        marginBottom: "16px"
      }}
    >
      <input
        placeholder="Client name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <button onClick={submit}>Add client</button>
    </div>
  )
}
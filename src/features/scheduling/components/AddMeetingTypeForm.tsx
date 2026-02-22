import { useState } from "react"

export default function AddMeetingTypeForm({ onAdd }: any) {
  const [name, setName] = useState("")
  const [duration, setDuration] = useState(30)

  function submit() {
    if (!name) return

    onAdd({
      id: crypto.randomUUID(),
      name,
      duration
    })

    setName("")
    setDuration(30)
  }

  return (
    <div style={{
      border: "1px solid var(--border-subtle)",
      padding: "16px",
      background: "var(--bg-surface)",
      marginBottom: "16px"
    }}>
      <input
        placeholder="Meeting name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        type="number"
        value={duration}
        onChange={e => setDuration(Number(e.target.value))}
      />

      <button onClick={submit}>
        Create meeting type
      </button>
    </div>
  )
}
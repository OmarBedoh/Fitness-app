import AppShell from "../../../layout/AppShell"
import { useScheduling } from "../useScheduling"
import AddMeetingTypeForm from "../components/AddMeetingTypeForm"

export default function SchedulingPage() {
  const { meetingTypes, addMeetingType } = useScheduling()

  return (
    <AppShell>
      <h1 style={{ fontSize: "20px", marginBottom: "16px" }}>
        Scheduling
      </h1>

      <AddMeetingTypeForm onAdd={addMeetingType} />

      <div style={{
        border: "1px solid var(--border-subtle)",
        background: "var(--bg-surface)"
      }}>
        {meetingTypes.map(type => (
          <div
            key={type.id}
            style={{
              padding: "12px",
              borderBottom: "1px solid var(--border-subtle)"
            }}
          >
            {type.name} — {type.duration} mins
          </div>
        ))}
      </div>
    </AppShell>
  )
}
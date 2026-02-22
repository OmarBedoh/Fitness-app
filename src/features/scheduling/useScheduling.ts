import { useState } from "react"
import { MeetingType } from "./types"

export function useScheduling() {
  const [meetingTypes, setMeetingTypes] = useState<MeetingType[]>([])

  function addMeetingType(type: MeetingType) {
    setMeetingTypes(prev => [...prev, type])
  }

  return {
    meetingTypes,
    addMeetingType
  }
}
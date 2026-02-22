import { useState } from "react"
import { Client } from "./types"

export function useClients() {
  const [clients, setClients] = useState<Client[]>([])

  function addClient(client: Client) {
    setClients(prev => [...prev, client])
  }

  return { clients, addClient }
}
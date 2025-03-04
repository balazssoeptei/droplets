"use client"

import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import { Container } from "./Container"

export default function Home() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Container />
      </div>
    </DndProvider>
  )
}
import { useState } from "react"
import { DropletType } from "./DropletType"

export const AddNew = ({ onClick }) => {
  const [dropletType, setDropletType] = useState(Array.from(Object.keys(DropletType))[0])

  return (
    <div>
      <select defaultValue={dropletType} onChange={(e) => setDropletType(e.target.value)}>
        {
          Object
            .values(DropletType)
            .filter(v => typeof (v) === "string")
            .map(dt => <option key={`dtoption_${dt}`}>{dt}</option>)
        }
      </select>
      <button onClick={() => onClick({ top: 10, left: 10, type: dropletType })}>Add new</button>
    </div>
  )
}
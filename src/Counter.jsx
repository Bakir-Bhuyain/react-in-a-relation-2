import { useState } from "react"

export default function Counter() {
      const [value, setValue] = useState(0);

      const handleAdd = () => {
            const newValue = value + 1;
            setValue (newValue);
      }
      const countStyle = {
            border: '2px solid pink'
      }
      return (
            <div style={countStyle}>
                  <h3>Count: {value}</h3>
                  <button onClick={handleAdd}>Add</button>
            </div>
      )
}
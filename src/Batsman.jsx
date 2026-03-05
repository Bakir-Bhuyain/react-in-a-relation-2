import { useState } from "react"

export default function Batsman() {
      const [runs, setRuns] = useState(0);
      const [sixes, setSixes] = useState(0);
      const [balls, setBalls] = useState(0);


      const handleBalls = () => {
            const ballCount = balls + 1;
            setBalls(ballCount);
      }



      const handleSingles = () => {
            const newRuns = runs + 1;
            setRuns(newRuns);
      }
      const handleSixes = () => {
            const newSixes = runs + 6;
            const updatedSixes = sixes + 1;
            setSixes(updatedSixes);
            setRuns(newSixes);
      }
      return (
            <div>
                  <p><small>Total Balls :{balls}</small></p>
                  {
                        balls >= 6 && <p>Its over</p>
                  }
                  <h3>Player : Bangla Batsman</h3>
                  <p><small>six : {sixes}</small></p>
                  {
                        runs > 50 && <p>Congress you scored 50+</p>
                  }
                  <h3>Balls : {balls}</h3>
                  <button onClick={handleBalls}>Ball COunt</button>
                  <h1>Score: {runs}</h1>
                  <button onClick={handleSingles}>singles</button>
                  <button>Fours</button>
                  <button onClick={handleSixes}>Sixes</button>
            </div>
      )
}
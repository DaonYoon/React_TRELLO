import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atom";





function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState)
  const [hours, setHours] = useRecoilState(hourSelector)
  const onMinutesChange = (event:React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value)
  }

  const onHoursChange = (event:React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value)
  }
  return <div>
    <input type="number" placeholder="minutes" value={minutes} onChange={onMinutesChange}></input>
    <input type="number" placeholder="hours" value={hours} onChange={onHoursChange}></input>



  </div>;
}

export default App;
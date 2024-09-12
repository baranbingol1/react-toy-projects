import {React, useState} from "react";
import ProgressBar from './ProgressBar.jsx'

function App() {
  const [progress, setProgress] = useState(0)

  const updateProgress = () =>  {
    progress == 100 ? 100 : setProgress(progress + 10)
  }

  return (
    <>
      <ProgressBar progress={progress} />
      <button onClick={updateProgress}>Increase Progress</button>
    </>
  )
}

export default App

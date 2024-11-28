import { useContext } from "react";
import { MoodContext } from "./main";

function App() {
  const mood = useContext(MoodContext)
  return <div className="border">{mood.happy}</div>;
}

export default App;

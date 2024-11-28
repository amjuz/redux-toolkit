import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createContext } from "react";


type TMoods = {
  happy: string
  sad: string
}

const moods = {
  happy: "haha",
  sad: "aww"
};
export const MoodContext = createContext<TMoods>(moods);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MoodContext.Provider value={moods}>
      <App />
    </MoodContext.Provider>
  </StrictMode>
);

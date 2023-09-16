import "./App.css";
import { useUserContext } from "./context/UserContext";

function App() {
  const { text } = useUserContext();
  return (
    <>
      <div className="underline">{text}</div>
    </>
  );
}

export default App;

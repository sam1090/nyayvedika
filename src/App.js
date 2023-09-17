import "./App.css";
import Home from "./components/home/home";
import BottomNav from "./components/navbar/BottomNav";
import { useUserContext } from "./context/UserContext";

function App() {
  const { text } = useUserContext();
  return (
    <>
      <Home />
      <BottomNav />
    </>
  );
}

export default App;
